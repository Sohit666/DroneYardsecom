# Use the official Node.js image as the base image
FROM node:18-alpine AS base

# Set the working directory in the container
WORKDIR /app

# Install dependencies only when needed
COPY package*.json ./
RUN npm install

# Copy the Next.js application code
COPY . .

# Copy the .env.local file
# This allows Docker to use the environment variables during build
COPY .env .env

# Build the Next.js application
RUN npm run build

# Expose port 3000 for Next.js
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
