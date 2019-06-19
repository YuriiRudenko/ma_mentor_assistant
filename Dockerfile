FROM node:8.16-alpine

RUN mkdir /app
WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

RUN npm install