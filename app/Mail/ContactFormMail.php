<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;

class ContactFormMail extends Mailable
{
    public $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function build()
    {
        return $this->from('contact@visible-schools.co.uk')
                    ->subject('Contact Form Submission')
                    ->view('emails.contact_form_mail');
    }
}
