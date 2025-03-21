<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class InboxController extends Controller
{
    public function index()
    {
        // Get the authenticated user's ID
        $userId = auth()->user()->id;

        // Pass userId to the Inertia component
        return Inertia::render('Inboxes/Index', [
            'userId' => $userId
        ]);
    }
}
