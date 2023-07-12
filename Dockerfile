# ---- Base Node ----
FROM node:18.16-alpine3.18 AS base
RUN apk add --no-cache tzdata
ENV TZ=Asia/Bangkok

RUN yarn set version berry
RUN yarn config set nodeLinker node-modules

WORKDIR /usr/service

# ---- Dependencies Build Webpack ----
FROM base AS build 
WORKDIR /usr/build
COPY . . 
RUN touch yarn.lock
RUN yarn plugin import workspace-tools
RUN yarn install
RUN yarn bin
RUN yarn build

# ---- produciton dependencies ----
FROM build AS prod_dependencies
RUN yarn workspaces focus --production

# ---- Release ----

# nginx state for serving content
FROM nginx:alpine
ARG  SERVER_NAME
ENV  SERVER_NAME=$SERVER_NAME
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*

COPY ./certs/live  /etc/letsencrypt/live/
# COPY --from=build /usr/build/certs /var/www/certbot
# Copy static assets from builder stage
COPY --from=build /usr/build/dist .
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]

