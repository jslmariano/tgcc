FROM webdevops/php-apache:8.1-alpine

COPY entrypoint.d/*.sh /opt/docker/provision/entrypoint.d/
COPY vhosts/vhost.conf /opt/docker/etc/httpd/vhost.conf

WORKDIR /app
COPY . /app/
