FROM node:current-alpine3.13 AS build

EXPOSE 8090

WORKDIR /src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM node:current-alpine3.13
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /src/app/dist/airlab-ui /usr/share/nginx/html/
