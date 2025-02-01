# pull official base  node image
FROM node:22.10-bullseye

# set work directory
WORKDIR /usr/src/app

# copy only package files in this layer in order to cache deps efficiently
COPY package*.json ./

# install project deps
RUN npm install --legacy-peer-deps

# copy the rest of the front project
COPY . .

# default command to execute
CMD ["npm", "run", "dev", "--", "--host"]
