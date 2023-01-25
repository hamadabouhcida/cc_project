# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app/test

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Install the required packages
RUN npm ci && npm cache clean --force

# Copy the rest of the application code into the container
COPY . .

# Expose port 3000 for the application to listen on
EXPOSE 3000

# Start the application with the command "npm start"
CMD ["npm", "test"]