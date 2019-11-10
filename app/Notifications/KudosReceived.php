<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class KudosReceived extends Notification
{
    use Queueable;
    protected $kudos;


    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($kudos)
    {
        $this->kudos = $kudos;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database', 'mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->line('Well done, you have received a Kudos from '.$this->kudos->sender->name)
                    ->action('Notification Action', url('/kudos/'.$this->kudos->receiver->id))
                    ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            'message' => 'you have received a new Kudos',
            'link' => '/kudos/'.$this->kudos->receiver_id
        ];
    }
}
