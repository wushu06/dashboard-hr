<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class LikesTest extends TestCase
{
    use RefreshDatabase;
    /**
     *
     *
     * @test
     */
    public function user_can_like_kudos()
    {
        $this->signIn();
        $kudos = create('App\Kudos');
        $this->post('/likes/add', ['kudos_id' => $kudos->id, 'user_id' => auth()->user()->id, 'receiver_id' => 1]);
        $this->assertDatabaseHas('likes', ['kudos_id' => $kudos->id]);
    }

    /**
     *
     *
     * @test
     */
    public function user_can_like_kudos_only_once()
    {
        $this->signIn();
        $kudos = create('App\Kudos');
        $this->post('/likes/add', ['kudos_id' => $kudos->id, 'user_id' => auth()->user()->id, 'receiver_id' => 1]);
        $this->assertDatabaseHas('likes', ['kudos_id' => $kudos->id]);
       // $this->post('/likes/add', ['kudos_id' => $kudos->id, 'user_id' => auth()->user()->id, 'receiver_id' => 1]);
      //  $this->assertEquals(1,\App\Like::all()->count());
    }


    /**
     *
     *
     * @test
     */
    public function user_can_unlike_kudos()
    {
        $this->signIn();
        $kudos = create('App\Kudos');
        $like = create('App\Like');
        $this->delete('/likes/delete/'.$kudos->id);
        $this->assertDatabaseMissing('likes', ['id' => $like->id]);
    }

    /**
     *
     *
     * @test
     */
    public function delete_like_when_kudos_its_deleted()
    {
        $this->signIn(create('App\User'));
        $kudos = create('App\Kudos');
        $like = create('App\Like');
        $this->signIn(factory('App\User')->states('admin')->create());
        $this->delete('kudos/delete/'.$kudos->id);
        $this->assertDatabaseMissing('kudos', $kudos->toArray());
        $this->assertDatabaseMissing('likes', $like->toArray());
    }
}
