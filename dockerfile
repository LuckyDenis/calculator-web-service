# Node:React
FROM node:10 AS build
WORKDIR /home/app

COPY package.json package-lock.json webpack.config.js .babelrc /home/app/
COPY ./src/ /home/app/src/

RUN npm install
RUN npm run build


# Nginx
FROM nginx:1.18.0

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build '/home/app/dist' '/var/www/'
RUN nginx -t

EXPOSE 3000 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
