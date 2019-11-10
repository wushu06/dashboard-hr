<?php

namespace Tests\Feature;

use Illuminate\Support\Facades\DB;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Notifications\DatabaseNotification;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class NotificationTest extends TestCase
{
    use DatabaseMigrations;



    public function setUp() :void
    {
        parent::setUp();

        $this->signIn();
    }

    /**
     * @test
     */
    public function create_notification_on_kudos_creation()
    {
        $user1 = create('App\User');
        $this->signIn($user1);
        $user2 = create('App\User');
        $this->post('/kudos/add', ['receiver_id' => $user2->id, 'sender_id'=>auth()->id(), 'text' => 'lorem ipsum']);
        $this->assertDatabaseHas('notifications', ['type' => 'App\Notifications\KudosReceived']);
        $this->post('/kudos/add', ['receiver_id' => $user1->id, 'sender_id'=>auth()->id()]);
        $this->assertCount(1, DB::table('notifications')->get());
    }

}
