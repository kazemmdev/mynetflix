<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Resources\UserResource;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::group(['middleware' => 'auth:sanctum'], function() {
    Route::get('/user', function (Request $request) {
        return ['data' => new UserResource($request->user())];
    });
    Route::delete('/logout', [AuthController::class,'logout']);

    Route::get("/subscriptions", [SubscriptionController::class, 'index']);
    Route::get("/subscriptions/{id}", [SubscriptionController::class, 'get']);
    Route::get("/create-payment-intent", [SubscriptionController::class, 'stripe']);
    Route::post("/stripe/confirm", [SubscriptionController::class, 'confirm']);
});
