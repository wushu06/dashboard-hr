<?php

namespace App\Listeners;

use App\Events\KudosEvent;
use App\Mail\GotKudos;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Mail;

class SendKudostNotification
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  KudosEvent  $event
     * @return void
     */
    public function handle($event)
    {
        Mail::to($event->user->email)->send(new GotKudos($event->user));
    }
}
