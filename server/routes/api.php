<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TodoController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('todos', [TodoController::class, 'index']);
Route::post('addnew', [TodoController::class, 'store']);
Route::put('todosupdate/{id}', [TodoController::class, 'update']);
Route::delete('todosdelete', [TodoController::class, 'destroy']);
