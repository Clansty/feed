FROM node:alpine

WORKDIR /app
COPY server.js .
EXPOSE 2333
CMD ["node", "server.js"]
