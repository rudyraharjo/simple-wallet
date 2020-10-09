<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Menu;
use Faker\Generator as Faker;

$factory->define(Menu::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'price' => 20000,
        'pic' => 'http://lorempixel.com/640/480/',
        'description' => $faker->paragraph
    ];
});
