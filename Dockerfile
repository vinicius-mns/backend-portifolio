FROM node:16-alpine

WORKDIR /app

COPY ./ ./

RUN npm install

CMD npx tsc ; npm start