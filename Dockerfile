FROM node:24-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY src ./src
COPY tests ./test

EXPOSE 3000

CMD ["npm", "run", "serve"]
