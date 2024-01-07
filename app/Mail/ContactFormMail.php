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
        return $this->from('form@visible-schools.com')
                    ->subject('Contact Form Submission')
                    ->view('emails.contact_form_mail');
    }
}
