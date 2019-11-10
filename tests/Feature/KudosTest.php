<?php

namespace Tests\Feature;

use App\Mail\GotKudos;
use App\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Company;

class KudosTest extends TestCase
{
    // use DatabaseMigrations;
    use RefreshDatabase;
    /**
     * @test
     */
    public function non_loggedin_cant_add_kudos()
    {

        $this->post('kudos/add', ['sender_id'=> 1, 'receiver_id'=> 1])
            ->assertRedirect('/login');
    }

    /**
     * @test
     */
    public function loggedin_user_can_add_kudos()
    {
        $user = create('App\User');
        $this->signIn($user);

        $user2 = create('App\User');
        $this->post('kudos/add', ['sender_id'=> $user->id, 'receiver_id'=> $user2->id, 'text' => 'lorem ipsum']);
        $this->assertDatabaseHas('kudos', ['sender_id' => $user->id]);
    }

    /**
     * @test
     */
    public function loggedin_user_cant_give_kudos_to_themselves()
    {
        $user = create('App\User');
        $this->signIn($user);
        $this->post('kudos/add', ['sender_id'=> $user->id, 'receiver_id'=>$user->id]);
        $this->assertDatabaseMissing('kudos', ['sender_id' => 1]);
    }

    /**
     * @test
     */
    public function only_admin_can_delete_kudos()
    {
       $this->signIn(create('App\User'));
       $kudos = create('App\Kudos');
       $this->delete('kudos/delete/'.$kudos->id);
       $this->assertDatabaseHas('kudos', $kudos->toArray());
       $this->signIn(factory('App\User')->states('admin')->create());
       $this->delete('kudos/delete/'.$kudos->id);
       $this->assertDatabaseMissing('kudos', $kudos->toArray());

    }
     /**
     * @testx
     */
     /*
    public function receive_email_when_get_a_kudos()
    {
        Mail::fake();
        $user = create('App\User');
        $this->signIn($user);

        $user2 = create('App\User');
        $this->post('kudos/add', ['sender_id'=> $user->id, 'receiver_id'=> $user2->id]);


        Mail::assertQueued(GotKudos::class);

    }*/

     /**
      * @test
      */
     public function check_text_for_spam()
     {
         $this->signIn();
         $this->post('kudos/add', ['sender_id'=> 1, 'receiver_id'=>2, 'text'=> 'aaaaaa']);
         $this->assertDatabaseMissing('kudos', ['text' => 'aaaaaa']);


     }

}
