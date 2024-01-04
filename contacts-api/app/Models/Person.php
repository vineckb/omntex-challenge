<?php

namespace App\Models;

use Database\Factories\PersonFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Person extends Model
{
    use HasFactory;
    use HasUuids;
    use SoftDeletes;

    protected $table = 'persons';

    protected static function newFactory(): Factory
    {
        return PersonFactory::new();
    }

    public function contact(): HasMany
    {
        return $this->hasMany(Contact::class);
    }
}
