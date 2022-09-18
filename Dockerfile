FROM node:16-alpine

WORKDIR /app

COPY *.json .

RUN npm install

COPY . .

CMD npm start