<?php

use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\VisitorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// visitors
Route::get('getvisitor', [VisitorController::class, 'GetVisitorDetails']);

// contact
Route::post('postcontact', [ContactController::class, 'PostContactDetails']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
