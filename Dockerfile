# Use the official Node.js 16 image.
FROM node:16.20.1

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose port 3000
EXPOSE 3000

# Set the command to start your application
CMD ["npm", "start"]

