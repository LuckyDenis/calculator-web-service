# Node:React
FROM node:10
WORKDIR /home/app

COPY package.json package-lock.json webpack.config.js .babelrc /home/app/
COPY ./src/ /home/app/src/

RUN npm install
RUN npm build


# Nginx
FROM nginx.1.16

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /home/app/dist/ /usr/share/nginx/html

EXPOSE 3000 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
