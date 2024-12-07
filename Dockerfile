# Builder Stage
FROM node:alpine as builder
LABEL author="Claudia"

WORKDIR /app
RUN apk update
WORKDIR /app/search_page_fe
COPY . .
RUN npm i
RUN npm run build

# Runtime Stage
FROM nginx:1.15-alpine
COPY --from=builder /app/search_page_fe/dist /usr/share/nginx/html