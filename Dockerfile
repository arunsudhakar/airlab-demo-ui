FROM trion/ng-cli as builder
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci  --debug 
COPY . .
RUN ng build --prod


FROM nginx:1.17.5
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder  /app/dist/airlab-ui /usr/share/nginx/html 
CMD nginx -g 'daemon off;'
