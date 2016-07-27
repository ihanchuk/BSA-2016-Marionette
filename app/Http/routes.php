<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::resource("/books","BooksController",['only' => ['destroy','show','create','index']]);
Route::resource("/users","UsersController",['only' => ['show']]);
Route::resource('books.users', 'BooksUsersController',['only' => ['update','show','edit']]);
