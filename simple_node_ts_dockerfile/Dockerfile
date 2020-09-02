FROM node:12

# director to put you app inside the container
WORKDIR /user/src/app

# Copy packages.json to WORKDIR
COPY package*.json ./

# Install dependencis
RUN npm install

# Enviorments
ENV NODE_ENV development

# Copy your code into the container WORKDIR
COPY . .

EXPOSE 8080
 
CMD [ "npm", "run", "start:dev" ]