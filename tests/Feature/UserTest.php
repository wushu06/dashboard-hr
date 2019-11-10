<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Company;
use Illuminate\Http\UploadedFile;
class UserTest extends TestCase
{
   // use DatabaseMigrations;
    use RefreshDatabase;

    /**
     * @test
     */

    public function register_company_when_registering_user()
    {
        $user  = create('App\User');
        $this->assertDatabaseHas('users', ['id'=>$user->id]);
        $this->assertDatabaseHas('companies', ['id'=>$user->company_id]);


    }



    /**
     * @test
     */
    public function logged_in_user_can_update_their_profile()
    {

        $user = factory('App\User')->states('notAdmin')->create();
        $this->signIn($user);
        $array = [
            'name' => 'Noureddine',
            'email' => 'test@gmail.com',
            'company_id' => 1,
            'is_admin' =>  1,
        ];

        $this->patch('/user/update/'.$user->id, $array);

        $this->assertDatabaseHas('users', ['id'=>$user->id, 'name'=> 'Noureddine']);

    }
    /**
     * @test
     */
    public function logged_in_user_cannot_update_others_profile()
    {

        $user = factory('App\User')->create();
        $this->signIn($user);

        $user2 = factory('App\User')->create();

        $this->patch('/user/update/'.$user2->id, ['name'=> 'Noureddine']);
        $this->assertDatabaseMissing('users', ['id'=>$user2->id, 'name'=> 'Noureddine']);

    }

    /**
     * @test
     */
    public function admin_can_update_others_profile()
    {

        $user = factory('App\User')->states('admin')->create();
        $this->signIn($user);
        $array = [
            'name' => 'Noureddine',
            'email' => 'test@gmail.com',
            'company_id' => 1,
            'is_admin' =>  1,
        ];

        $user2 = factory('App\User')->create();
        $this->patch('/user/update/'.$user2->id, $array);
        $this->assertDatabaseHas('users', ['id'=>$user2->id, 'name'=> 'Noureddine']);

    }
    /**
     * @test
     */
    public function only_admin_can_delete_users()
    {

        $user = factory('App\User')->create();
        $this->signIn($user);
        $user2 = factory('App\User')->create();
        $this->delete('/user/delete/'.$user2->id);
        $this->assertDatabaseHas('users', ['id'=>$user2->id]);

        $user = factory('App\User')->states('admin')->create();
        $this->signIn($user);
        $this->delete('/user/delete/'.$user2->id);
        $this->assertDatabaseMissing('users', ['id'=>$user2->id]);



    }

    /** @test */
    public function a_user_may_add_an_avatar_to_their_profile()
    {
        $user = create('App\User');
        $this->signIn($user);


        Storage::fake('public');
        $array = [
            'name' => $user->name,
            'email' => $user->email,
            'company_id' => 1,
            'is_admin' =>  1,
            'avatar' => $file =base64_encode( UploadedFile::fake()->image('avatar.jpg'))
        ];

        $this->patch(
            '/user/update/'.$user->id,
            $array
        );
        $imageData = $file;
        //$fileName =  $user->email . '.' . explode('/', explode(':', substr($imageData, 0, strpos($imageData, ';')))[1])[1];

        $this->assertDatabaseHas('users', ['email' => $user->email ]);

       /* $ext = '.'.$file->getClientOriginalExtension();
        $filename = '/'.$user->fresh()->avatar_path;

        $this->assertEquals(
            asset('avatars/'.$user->email.$ext),
            asset($filename)
        );
        Storage::disk('public')->exists($filename);*/
    }

    /**
     * @test
     */
    public function add_user_using_vue()
    {
        $this->adminSignIn();

        $data = [
            'holiday_allowance' => 20,
            'department' => 1,
            'approver' => 1,
            'address' => 'ouzel',
            'tel' => 07555,
            'dob' => '15-05-1986',
            'role' => 'web'
        ];
        $array = [
            'name' => 'Noureddine',
            'email' => 'test@gmail.com',
            'company_id' => 1,
            'is_admin' =>  1,

        ];
        $this->json('POST', '/employees/create' , array_merge($array, $data));

        $this->assertDatabaseHas('users', $array);
        $this->assertDatabaseHas('user_data', $data);

    }

    /**
     * @test
     */
    public function update_user_using_vue()
    {
        $user = factory('App\User')->states('admin')->create();
        $this->signIn($user);
        $array = [
            'name' => 'Noureddine',
            'email' => 'test@gmail.com',
            'company_id' => 1,
            'is_admin' =>  1,
        ];

        $user2 = factory('App\User')->create();
        $this->json('PATCH', '/user/update/'.$user2->id, $array);

        $this->assertDatabaseHas('users', ['id'=>$user2->id, 'name'=> 'Noureddine']);

    }

    /**
     * @test
     */
    public function remove_user_using_vue()
    {
        $this->adminSignIn();
        $user = create('App\User');

        $this->json('DELETE', '/user/delete/'.$user->id );

        $this->assertDatabaseMissing('users', ['id' => $user->id]);

    }
}
