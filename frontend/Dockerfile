# 1. Stage build: Node
FROM node:20-alpine AS build

WORKDIR /app

# Copy package.json + package-lock.json
COPY package*.json ./

# Cài dependencies
RUN npm install

# Copy toàn bộ source
COPY . .

# Build Vite ra dist
RUN npm run build

# 2. Stage serve: nginx
FROM nginx:alpine

# Copy thư mục dist vào nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 cho Render
EXPOSE 80

# CMD serve bằng nginx
CMD ["nginx", "-g", "daemon off;"]