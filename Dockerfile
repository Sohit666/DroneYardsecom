# Use Node.js 18 as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files to the container
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port 3000 to access the app
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
