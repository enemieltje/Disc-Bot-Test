FROM node:latest

# create a directory
RUN mkdir -p /app
WORKDIR /app

# let node install dependancies
COPY package.json /app
RUN npm install

# copy our program
COPY . /app

# start our program
CMD ./start.sh
