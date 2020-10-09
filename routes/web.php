<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('app');
});

Route::get('/config-cache', function() {
    Artisan::call('config:cache');
    return 'DONE config:cache'; //Return anything
});

Route::get('/config-clear', function() {
    Artisan::call('config:clear');
    return 'DONE config:clear'; //Return anything
});

Route::any('app/{any?}', function () {
    return view('layouts.app');
})->where('any', '.*');
