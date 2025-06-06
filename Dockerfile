# Base image
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Install nodemon globally
RUN npm install -g nodemon

# Copy the rest of the project
COPY . .

# Expose app port
EXPOSE 5000

# Use nodemon in development
CMD ["nodemon", "app.js"]
