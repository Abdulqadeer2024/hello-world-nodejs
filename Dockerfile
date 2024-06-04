bat "docker build --no-cache -t hello-world-nodejs ."
FROM node:16.20.1
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install -g jest
RUN npm install
RUN npm install && ls node_modules | grep supertest

COPY . .
RUN ls -la /usr/src/app
