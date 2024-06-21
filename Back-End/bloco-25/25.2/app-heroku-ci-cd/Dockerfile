FROM node:alpine

WORKDIR /app-exemple

COPY package.json .

RUN npm install

COPY . .

CMD ["node", "index.js"]