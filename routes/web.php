<?php

use App\Http\Controllers\Auth\Spa\LoginController;
use App\Http\Controllers\Auth\Spa\LogoutController;
use Illuminate\Support\Facades\Route;

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

Route::post('login', LoginController::class);

Route::get('logout', LogoutController::class);

Route::get('/{vue?}', function () {
    return view('app');
})->where('vue', '[\/\w\.-]*');

