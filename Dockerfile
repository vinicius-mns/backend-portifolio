FROM node:16-alpine

WORKDIR /app

COPY ./ ./

RUN npm install

CMD npx tsc src/index.ts ; npm start