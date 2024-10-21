<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("/", function() {
    return response()->json(["message" => "Welcome to the Dummy API!"]);
});

/**
 * Route to fetch the products from the Dummy API
 * This route uses the ProductController to return a list of products.
 */
Route::get('/products', [ProductController::class, 'fetchProducts']);

// Route to search products
Route::get('/products/search', [ProductController::class, 'searchProducts']);
