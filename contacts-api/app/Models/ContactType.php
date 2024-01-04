<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Database\Factories\ContactTypeFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class ContactType extends Model
{
    use HasFactory;
    use HasUuids;
    use SoftDeletes;

    protected static function newFactory(): Factory
    {
        return ContactTypeFactory::new();
    }
}
