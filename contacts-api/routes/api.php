<?php

use App\Http\Controllers\PersonController;
use Illuminate\Support\Facades\Route;

Route::apiResource('persons', PersonController::class);
