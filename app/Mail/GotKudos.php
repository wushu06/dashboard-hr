<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class GotKudos extends Mailable  implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $kudos;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($kudos)
    {
        $this->kudos = $kudos;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('email.kudos');
    }
}
