<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Contact;
use Illuminate\Database\Seeder;
use App\Models\ContactType;
use App\Models\Person;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {

        $phoneType = ContactType::factory()->create(['title' => 'Phone']);
        $emailType = ContactType::factory()->create(['title' => 'E-mail']);

        Person::factory()
            ->count(5)
            ->has(Contact::factory()->count(2)->state(function (array $attributes, Person $person) use ($phoneType, $emailType) {

                $type = rand(0, 1) == 1 ? $phoneType : $emailType;

                return [
                    'person_id' => $person->id,
                    'type_id' => $type->id,
                    'value' => $type->id === $emailType->id ? fake()->email() : fake()->phoneNumber()
                ];
            }))->create();
    }
}
