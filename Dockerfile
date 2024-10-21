FROM nginx:alpine
COPY ./dist /usr/share/nginx/html

RUN apk update \
    && apk upgrade \
    && apk add --no-cache bash

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80
