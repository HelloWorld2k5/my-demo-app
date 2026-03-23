FROM php:8.2-cli

WORKDIR /app

# Cập nhật apt và cài gói cần thiết
RUN apt-get update && \
    apt-get install -y unzip git curl libzip-dev libonig-dev libxml2-dev && \
    docker-php-ext-install pdo pdo_mysql zip

# Cài composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin --filename=composer

# Copy composer files trước (cache layer)
COPY composer.json composer.lock ./

# Cài dependencies PHP
RUN composer install --no-dev --optimize-autoloader

# Copy source code Laravel
COPY . .

# Expose port cho Render
EXPOSE 8000

# Lệnh start Laravel
CMD php artisan serve --host=0.0.0.0 --port=$PORT