<?php

namespace App\Http\Controllers;

use App\Http\Requests\DeleteManyPersonRequest;
use App\Http\Requests\StorePersonRequest;
use App\Http\Requests\UpdatePersonRequest;
use App\Models\Person;

class PersonController extends Controller
{
    public function index()
    {
        return Person::all();
    }

    public function store(StorePersonRequest $request)
    {
        $person = Person::create($request->all());

        return response()->json($person, 201);
    }

    public function show(Person $person)
    {
        return response()->json($person);
    }

    public function update(UpdatePersonRequest $request, Person $person)
    {
        $person->update($request->all());

        return response()->json($person);
    }

    public function destroy(Person $person)
    {
        $person->forceDelete();
        return response()->json(null, 204);
    }

    public function destroyMany(DeleteManyPersonRequest $request)
    {
        Person::query()->whereIn('id', $request->input('ids'))->forceDelete();
        return response()->json(null, 204);
    }


    public function trash(Person $person)
    {
        $person->delete();
        return response()->json(null, 204);
    }

    public function trashMany(DeleteManyPersonRequest $request)
    {
        Person::query()->whereIn('id', $request->input('ids'))->delete();
        return response()->json(null, 204);
    }
}
