<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Stock;
use Faker\Generator as Faker;

$factory->define(Stock::class, function (Faker $faker) {
    return [
        'code_stock' => "CODE",
        'name' => $faker->name,
        'pic' => 'http://lorempixel.com/640/480/',
        'price' => 20000,
        'qty' => 10,
    ];
});
