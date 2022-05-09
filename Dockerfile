# Base Image
FROM node:14-alpine

# Specify the base working directory
WORKDIR /usr/app/visits

# Run Commands - Install Dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Start Command - Starting the Image
CMD ["npm", "start"]