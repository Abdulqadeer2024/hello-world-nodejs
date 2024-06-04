# Use the official Node.js 16 image.
FROM node:16.20.1

# Set the working directory in the container
WORKDIR /usr/src/app

# Install global packages
RUN npm install -g jest

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application code
COPY . .
