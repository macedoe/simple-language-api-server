# Use Node.js as the base image
FROM node:22-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package.json package-lock.json ./

# Install all dependencies, including devDependencies
RUN npm ci 

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Use a smaller final image
FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy built application from the builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package.json . 

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["node", "dist/main.js"]
