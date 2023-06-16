# Using node:16-alpine base image
FROM node:alpine

# Set /app as the default work directory
WORKDIR /app

# copy package.json to the working directory for packages installation
COPY package.json /app

# Install npm dependencies
RUN npm install
RUN npm install -D tailwindcss

# Copy all the project files to the working directory
COPY . .

ENV API_URL backend_service


# Expose the port of your application to bind with the host port
EXPOSE 3000

# run your app
CMD ["npm", "run",  "start"]