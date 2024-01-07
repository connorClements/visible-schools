<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormMail;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        // Validate the form data
        $validatedData = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'school' => 'required|string',
            'subject' => 'required|string',
            'message' => 'required|string',
        ]);

        // Send email
        Mail::to('test@email.com')->send(new ContactFormMail($validatedData));

        return response()->json(['message' => 'Message sent! We will get back to you within 24 hours.']);
    }
}
