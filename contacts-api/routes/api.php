<?php

use App\Http\Controllers\PersonController;
use Illuminate\Support\Facades\Route;

Route::delete('/persons/trash/{person}', [PersonController::class, 'trash']);
Route::delete('/persons/trash-many', [PersonController::class, 'trashMany']);
Route::delete('/persons/destroy-many', [PersonController::class, 'destroyMany']);
Route::apiResource('persons', PersonController::class);
