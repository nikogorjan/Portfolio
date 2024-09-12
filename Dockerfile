# Use the official Node.js image as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the React app's source code into the container
COPY . .

# Build the React app for production
RUN npm run build

# Install a simple web server to serve the build files
RUN npm install -g serve

# Set the command to run the app when the container starts
CMD ["serve", "-s", "build", "-l", "3000"]

# Expose the port that your React app will run on
EXPOSE 3000