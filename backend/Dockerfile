FROM node:9.2-alpine

ENV NODE_ENV production

RUN mkdir -p /usr/src/backend 

COPY package.json /usr/src/backend

COPY ./dist /usr/src/backend/dist

WORKDIR /usr/src/backend

RUN npm --registry=https://registry.npm.taobao.org install 

CMD [ "node", "dist/index.js" ]