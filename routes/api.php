<?php
use Illuminate\Http\Request;

// MASTER ROUTES
include __DIR__.'/auth/auth.php';
// END MASTER ROUTES

Route::group(['prefix' => 'user'], function () {
    Route::get('/', 'API\UserController@index');
    Route::post('/PostDeposit', 'API\UserController@PostDeposit');
    Route::post('/PostWithdraw', 'API\UserController@PostWithdraw');
    Route::post('/PostTransfer', 'API\UserController@PostTransfer');
    Route::get('/getListTransfers', 'API\UserController@getListTransfers');
    
});



// TEST SCOPE
Route::get('/super-admin', function (Request $request) {
    return response()->json(["data"=>"only admin"]);
})->middleware(['auth:api', 'scope:super-admin']);

Route::get('/customer', function (Request $request) {
    return response()->json(["data"=>"customer"]);
})->middleware(['auth:api', 'scope:super-admin,customer']);


// END TEST SCOPE