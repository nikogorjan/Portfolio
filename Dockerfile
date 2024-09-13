# Stage 1: Build the React app
FROM node:16-alpine AS build

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

# Stage 2: Serve the app using Apache
FROM httpd:latest

# Copy the built React app from the previous stage to Apache's web root
COPY --from=build /app/build /usr/local/apache2/htdocs/

# Copy the custom configuration (for React Router routing) into a separate file
COPY apache-rewrite.conf /usr/local/apache2/conf/rewrite.conf

# Include the new config in the main Apache config
RUN echo "Include /usr/local/apache2/conf/rewrite.conf" >> /usr/local/apache2/conf/httpd.conf

# Add the ServerName directive to avoid server name warnings
RUN echo "ServerName nikogorjan.com" >> /usr/local/apache2/conf/httpd.conf

# Expose port 80
EXPOSE 80

# Run Apache in the foreground
CMD ["httpd-foreground"]