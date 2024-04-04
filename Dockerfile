FROM node:21-alpine3.18 As node
WORKDIR /app
COPY ./package*.json ./
RUN npm install
RUN npm install pg
COPY src nest-cli.json tsconfig.json tsconfig.build.json ./
RUN npm run build