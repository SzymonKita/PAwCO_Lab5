ARG VERSION=1
FROM nginx
ARG VERSION
ENV V ${VERSION}

WORKDIR /usr/share/nginx/html

COPY default /etc/nginx/sites-available/default

COPY index.html .

RUN apk add --update nodejs npm

COPY index.js .

HEALTHCHECK --interval=10s --timeout=1s \
  CMD curl -f http://localhost:80/ || exit 1

CMD ["nginx", "-g", "daemon off;"]

