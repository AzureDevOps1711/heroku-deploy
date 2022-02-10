FROM ubuntu
LABEL author.name ="Krishna M S"
LABEL author.email ="githubkrish@gmail.com"
RUN apt-get update
RUN apt-get install nginx -y
COPY build /var/www/html/
EXPOSE 80
CMD ["nginx","-g","daemon off;"]