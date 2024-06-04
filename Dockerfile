# Use the official Node.js 16 image.
FROM node:16.20.1

# Set the working directory in the container
WORKDIR /usr/src/app

# Install Jest globally
RUN npm install -g jest

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy the rest of the application
COPY . .
