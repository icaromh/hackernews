FROM node:lts-slim

ENV NODE_ENV test
ENV PORT 3000
ENV DEBUG 1
ENV TZ America/Sao_Paulo

ADD . /app
WORKDIR /app

RUN npm install --silent

EXPOSE 3000

CMD npm run test
