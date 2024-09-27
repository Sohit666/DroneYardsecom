import mongoose, { ConnectOptions } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string; // Set this in your .env file

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

/**
 * Global is used here to maintain a cached connection across hot reloads in development.
 * This prevents connections from growing exponentially during API Route usage.
 */
interface CachedConnection {
  conn: mongoose.Connection | null;
  promise: Promise<mongoose.Connection> | null;
}

declare global {
  var mongoose: CachedConnection;
}

let cached: CachedConnection = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase(): Promise<mongoose.Connection> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts: ConnectOptions = {
      // useNewUrlParser: true, // Default true in Mongoose 6+
      // useUnifiedTopology: true, // Default true in Mongoose 6+
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts)
      .then((mongoose) => {
        console.log('Connected to MongoDB');
        return mongoose.connection; // Return the connection
      })
      .catch((error) => {
        console.error('MongoDB connection error:', error);
        throw new Error('Failed to connect to MongoDB');
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDatabase;
