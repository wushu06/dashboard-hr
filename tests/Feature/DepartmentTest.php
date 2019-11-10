<?php

namespace Tests\Feature;

use App\Department;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class DepartmentTest extends TestCase
{
    use RefreshDatabase;
    /**
     *
     *
     * @test
     */
    public function only_admin_can_add_department()
    {
        $name = 'Digital';
        $this->post('/departments/add', [
            'name' => $name,
            'supervisor_id' => 1

        ]);
        $this->assertDatabaseMissing('departments', ['name' => $name]);

        $this->adminSignIn();
        $this->post('/departments/add', [
            'name' => $name,
            'supervisor_id' => 1

        ])->assertRedirect('/departments');

       $this->assertDatabaseHas('departments', ['name' => $name]);


    }
    /**
     * @test
     */
    public function non_admin_cannot_add_department()
    {
        $name = 'Digital';
        $this->signIn();
        $this->post('/departments/add', [
            'name' => $name,
            'supervisor_id' => 1

        ]);

        $this->assertDatabaseMissing('departments', ['name' => $name]);


    }
    /**
     * @test
     */
    public function add_supervisor_to_department()
    {


        $this->adminSignIn();
        $this->post('/departments/add', [
            'name' => 'digital',
            'supervisor_id' => 2

        ])->assertRedirect('/departments');
        $this->assertDatabaseHas('departments', ['supervisor_id' => 2]);


    }

    /**
     * @test
     */
    public function only_admin_can_delete_department()
    {
        $this->signIn();
        $dep = create('App\Department');
        $this->delete('departments/delete/'.$dep->id);
        $this->assertDatabaseHas('departments', ['id' => $dep->id]);

        $this->adminSignIn();
        $this->delete('departments/delete/'.$dep->id);
        $this->assertDatabaseMissing('departments', ['id' => $dep->id]);
    }

    /**
     * @test
     */
    public function only_admin_can_update_department()
    {
        $array = ['name' =>'newName'];
        $this->signIn();
        $dep = create('App\Department');

        $this->patch('departments/update/'.$dep->id,  $array);
        $this->assertDatabaseMissing('departments',  $array);

        $this->adminSignIn();
        $this->patch('departments/update/'.$dep->id,  $array);
        $this->assertDatabaseHas('departments',  $array);
    }

    /**
     * @test
     */
    public function remove_supervisor_id_when_user_is_deleted()
    {
        $this->adminSignIn();
        $supervisor = create('App\User');
        $dep = create('App\Department', ['supervisor_id'=> $supervisor->id]);
        $this->delete('/user/delete/'.$supervisor->id);
        $this->assertDatabaseMissing('users', ['id'=>$supervisor->id]);
        $this->assertDatabaseMissing('departments', ['supervisor_id'=>$supervisor->id]);
    }

    /**
     * @testz
     */
   /* public function department_name_is_required()
    {
        $this->adminSignIn();
        $name = 'Digital';
        $this->post('/departments/add', [
            'name' => ''

        ])->assertRedirect('/departments/create');
        /*$this->assertDatabaseMissing('departments', ['name' => $name]);

        $this->adminSignIn();
        $this->post('/departments/add', [
            'name' => $name,

        ]);

        $this->assertDatabaseHas('departments', ['name' => $name]);

    }*/


}
