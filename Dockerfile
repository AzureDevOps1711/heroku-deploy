FROM nginx:alpine

COPY build/ /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'