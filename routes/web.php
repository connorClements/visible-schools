<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/services', function () {
    return Inertia::render('Services');
});

Route::get('/services/prospectuses', function () {
    return Inertia::render('Services/Prospectuses');
});

Route::get('/services/book-bags', function () {
    return Inertia::render('Services/Bags');
});

Route::get('/services/banners', function () {
    return Inertia::render('Services/Banners');
});

Route::get('/services/leavers-hoodies', function () {
    return Inertia::render('Services/Hoodies');
});

Route::get('/services/sports-kits', function () {
    return Inertia::render('Services/Kits');
});

Route::get('/services/merchandising', function () {
    return Inertia::render('Services/Merch');
});

Route::get('/services/seo', function () {
    return Inertia::render('Services/Seo');
});

Route::get('/services/signage', function () {
    return Inertia::render('Services/Signage');
});

Route::get('/services/social-media', function () {
    return Inertia::render('Services/Social');
});

Route::get('/services/web-dev', function () {
    return Inertia::render('Services/Website');
});

Route::get('/services/yearbooks', function () {
    return Inertia::render('Services/Yearbooks');
});

Route::post('/contact-form', 'App\Http\Controllers\ContactController@send');
