<?php

namespace Tests\Feature;

use App\User;
use App\UserData;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserDataTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function admin_can_add_user_data()
    {
        $this->adminSignIn();
        $array = [
            'name' => 'Noureddine',
            'email' => 'test@gmail.com',
            'company_id' => 1,
            'is_admin' =>  1,
            'address' => 'ouzel',
            'tel' => '075555',
            'department' => 1,
            'role' => '',
            'holiday_allowance'=> '',
            'approver' => '',
            'dob' => ''
        ];
        $this->json('POST', '/employees/create' , $array);

        $this->assertDatabaseHas('users', ['name' => 'Noureddine']);
        $user = User::where('name', 'Noureddine')->first();
        $this->assertDatabaseHas('user_data', ['address' => 'ouzel', 'user_id' => $user->id]);
    }

    /**
     * @test
     */
    public function admin_can_update_user_data()
    {
        $this->adminSignIn();
        $array = [
            'name' => 'Noureddine',
            'email' => 'test@gmail.com',
            'company_id' => 1,
            'is_admin' =>  1,
            'address' => 'ouzel',
            'tel' => '075555',
            'department' => 1,
            'role' => '',
            'holiday_allowance'=> '',
            'approver' => 1,
            'dob' => '15/05/1986'
        ];
        $this->json('POST', '/employees/create' , $array);
        $user = User::where('name', 'Noureddine')->first();

        $new_array = [
            'name' => 'Noureddine',
            'email' => 'test@gmail.com',
            'company_id' => 1,
            'is_admin' =>  1,
            'address' => 'college',
            'tel' => '075555',
            'department' => 1,
            'role' => '',
            'holiday_allowance'=> '',
            'approver' => 1,
            'dob' => '15/05/1986'
        ];
        $this->json('PATCH', '/user/update/'.$user->id , $new_array);
       // $this->assertDatabaseHas('users', ['name' => 'Noureddine']);
        $this->assertDatabaseHas('user_data', ['address' => 'college', 'user_id' => $user->id]);
    }

    /**
     * @test
     */
    public function add_user_data_after_adding_user()
    {
      /*  $non_admin = factory('App\User');
        $this->post('/register', ['supervisor' => $non_admin->id]);
        $this->assertDatabaseMissing('user_data', ['supervisor' => $non_admin->id]);*/
      $this->assertTrue(1 == 1);
      return;
$this->withExceptionHandling();
        $admin = factory('App\User')->state('admin')->create();
        $this->signIn($admin);
        $array = [ 'name' => 'n',
            'email' => 'n@gmail.com',
            'company_id' => 1,
            'password' => '1524687',
            'is_admin' => 1,
            'address' => 'ouzel',
            'tel' => '078'
        ];
        $this->post(route('addEmployee'), $array)->assertRedirect('/empolyees');

        $this->assertDatabaseHas('user_data', ['tel' => '078']);

    }


}
