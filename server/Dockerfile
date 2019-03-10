FROM node:lts-slim

ENV NODE_ENV test
ENV PORT 3001

ADD . /app
WORKDIR /app

RUN npm install --silent

EXPOSE 3001

CMD node ./src
