# Bước 1: Build
FROM node:18-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Bước 2: Chạy bằng Nginx
FROM nginx:stable-alpine
# Copy file đã build từ bước 1 sang thư mục của Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]