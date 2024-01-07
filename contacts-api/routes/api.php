<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;

Route::get('contacts', [ContactController::class, 'index']);
Route::get('contacts/trashed', [ContactController::class, 'trashed']);
Route::post('contacts', [ContactController::class, 'store']);
Route::delete('/contacts/trash/{contact}', [ContactController::class, 'trash']);
Route::delete('/contacts/trash-many', [ContactController::class, 'trashMany']);
Route::delete('/contacts/many', [ContactController::class, 'destroyMany']);
Route::delete('/contacts/{id}', [ContactController::class, 'destroy']);
Route::put('contacts/{contact}', [ContactController::class, 'update']);
Route::get('contacts/{contact}', [ContactController::class, 'show']);
