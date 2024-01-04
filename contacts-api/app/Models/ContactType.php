<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Database\Factories\ContactTypeFactory;

class ContactType extends Model
{
    use HasFactory;
    use HasUuids;

    protected static function newFactory(): Factory
    {
        return ContactTypeFactory::new();
    }
}
