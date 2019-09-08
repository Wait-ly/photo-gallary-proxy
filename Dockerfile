FROM node:10.16.3

RUN mkdir -p /src/proxy

WORKDIR /src/proxy

COPY . /src/proxy

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]