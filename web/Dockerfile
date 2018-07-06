FROM node:9.11.2-jessie

EXPOSE 8080

RUN npm install --global yarn

WORKDIR /usr/src/app

COPY ./package.json ./yarn.lock /usr/src/app/

RUN yarn install --pure-lockfile

COPY ./ /usr/src/app

CMD ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --host 0.0.0.0 --history-api-fallback
