FROM node:alpine

WORKDIR /data

RUN npm install json-server -g --silent

COPY data.json data.json

EXPOSE 3030

CMD ["json-server", "--watch", "data.json", "--port", "3030", "--host", "0.0.0.0"]
