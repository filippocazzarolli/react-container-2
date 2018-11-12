FROM node:latest

MAINTAINER Filippo Cazzarolli

ENV NODE_ENV=development

COPY . /var/www
WORKDIR /var/www

#VOLUME ["/var/wwww"]

RUN npm install

EXPOSE 3001

ENTRYPOINT ["npm", "run"]