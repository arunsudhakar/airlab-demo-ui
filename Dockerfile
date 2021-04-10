FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/deploy_dist /usr/share/nginx/html
