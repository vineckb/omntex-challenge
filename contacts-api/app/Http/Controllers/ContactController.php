<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index()
    {
        return Contact::all();
    }

    public function trashed()
    {
        return response()->json(Contact::onlyTrashed()->get());
    }

    public function store(Request $request)
    {
        $body = $request->all();

        $contact = Contact::create($body);

        return response()->json($contact, 201);
    }

    public function show(Contact $contact)
    {
        return response()->json($contact);
    }

    public function update(Request $request, Contact $contact)
    {
        $contact->update($request->all());

        return response()->json($contact);
    }

    public function destroy(Request $request)
    {
        $id = $request->route()->parameter('id');
        Contact::query()->where('id', $id)->forceDelete();
        return response()->json(null, 204);
    }

    public function destroyMany(Request $request)
    {
        $ids = $request->input('ids');
        Contact::query()->whereIn('id', $ids)->forceDelete();
        return response()->json(null, 204);
    }


    public function trash(Contact $contact)
    {
        $contact->delete();
        return response()->json(null, 204);
    }

    public function trashMany(Request $request)
    {
        $ids = $request->input('ids');
        Contact::query()->whereIn('id', $ids)->delete();
        return response()->json(null, 204);
    }
}
