<?php

namespace App\Models;

use Database\Factories\ContactFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Contact extends Model
{
    use HasUuids;
    use SoftDeletes;

    protected $fillable = [
        'name',
        'alias',
        'email',
        'phone',
        'company',
        'address',
        'birthdate',
        'site'
    ];

    protected static function newFactory(): Factory
    {
        return ContactFactory::new();
    }
}
