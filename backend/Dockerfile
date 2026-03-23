# backend/Dockerfile
FROM php:8.2-cli

# Set working directory
WORKDIR /app

# Copy source code
COPY . .

# Cài các package cần thiết
RUN apt-get update && apt-get install -y unzip git curl libzip-dev \
    && docker-php-ext-install pdo pdo_mysql zip

# Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN composer install --no-dev --optimize-autoloader

# Expose port Render sẽ bind
EXPOSE 8000

# Start Laravel server trên 0.0.0.0:$PORT
CMD php artisan serve --host=0.0.0.0 --port=$PORT