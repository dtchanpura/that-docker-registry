FROM node:6-alpine AS builder

LABEL intermediate=true

COPY . /opt/app/

WORKDIR /opt/app

RUN npm install && npm run build

FROM nginx:alpine

COPY --from=builder /opt/app/public/ /usr/share/nginx/html/

