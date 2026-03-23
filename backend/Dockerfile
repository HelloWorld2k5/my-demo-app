FROM php:8.2-fpm-alpine

# Cài đặt các extension cần thiết cho Laravel
RUN docker-php-ext-install pdo_mysql

# Copy code vào container
WORKDIR /var/www
COPY . .

# Cài đặt Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN composer install --no-dev --optimize-autoloader

CMD ["php-fpm"]