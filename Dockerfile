FROM node:22.13.1-slim

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn build

EXPOSE 8080

CMD ["yarn", "dev"]