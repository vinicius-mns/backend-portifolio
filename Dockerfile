FROM node:16-alpine

WORKDIR /app

COPY *.json .

RUN npm install

COPY . .

CMD npx tsc src/index.ts ; npm start