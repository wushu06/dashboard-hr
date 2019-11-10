<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ROlestTest extends TestCase
{
    use RefreshDatabase;
    /**
     *
     *
     * @test
     */
    public function only_admin_can_add_roles()
    {
        $this->signIn();


        $this->post('/roles/add', [
              'name' => 'digital',
              'department_id' => 1

          ]);
        $this->assertDatabaseMissing('roles', ['name' => 'digital']);
        $this->adminSignIn();
        $this->post('/roles/add', [
            'name' => 'digital',
            'department_id' => 1

        ]);

        $this->assertDatabaseHas('roles', ['name' => 'digital']);


    }

    /**
     *
     *
     * @test
     */
    public function only_admin_can_delete_roles()
    {
        $this->signIn();
        create('App\Department');
        $role = create('App\Role');
        $this->delete('/roles/delete/'.$role->id);
        $this->assertDatabaseHas('roles', ['name' => $role->name]);
        $this->adminSignIn();
        $this->delete('/roles/delete/'.$role->id);
        $this->assertDatabaseMissing('roles', ['name' => $role->name]);


    }

    /**
     *
     *
     * @test
     */
    public function only_admin_can_update_roles()
    {
        $this->signIn();
        create('App\Department');
        $role = create('App\Role');
        $this->patch('/roles/update/'.$role->id, ['name' => 'designer']);
        $this->assertDatabaseHas('roles', ['name' => $role->name]);
        $this->adminSignIn();
        $this->patch('/roles/update/'.$role->id, ['name' => 'designer']);
        $this->assertDatabaseHas('roles', ['name' => 'designer']);


    }

}
