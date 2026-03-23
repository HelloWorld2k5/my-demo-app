<?php

use Illuminate\Support\Facades\Route;

Route::get('/hello', function () {
    return response()->json(['message' => 'Chào mừng bạn đến với API Laravel!']);
});