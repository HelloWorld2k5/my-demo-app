# 1. Chọn image PHP CLI
FROM php:8.2-cli

# 2. Thiết lập thư mục làm việc
WORKDIR /app

# 3. Copy file composer
COPY composer.json composer.lock ./

# 4. Cài composer dependencies
RUN apt-get update && apt-get install -y unzip git curl libzip-dev \
    && docker-php-ext-install pdo pdo_mysql zip \
    && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin --filename=composer \
    && composer install --no-dev --optimize-autoloader

# 5. Copy toàn bộ source code vào container
COPY . .

# 6. Expose port do Render yêu cầu
EXPOSE 8000

# 7. Lệnh chạy Laravel server trên port Render cung cấp
CMD php artisan serve --host=0.0.0.0 --port=$PORT