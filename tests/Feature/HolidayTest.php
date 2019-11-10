<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class HolidayTest extends TestCase
{
    use RefreshDatabase;
    protected  $start;
    protected  $end;
    protected $diff_in_days;

    public function __construct()
    {
        parent::__construct();
        $this->start = \Carbon\Carbon::createFromFormat('Y-m-d H:s:i', '2015-5-6 3:30:34');
        $this->end   =  \Carbon\Carbon::createFromFormat('Y-m-d H:s:i', '2015-5-11 9:30:34');
        $this->diff_in_days = $this->start->diffInDays($this->end) +1; // 6
    }



    /**
     * @test
     */
    public function logged_in_user_can_add_his_own_holiday()
    {
        $this->adminSignIn();

        $user = create('App\User');
        create('App\UserData', ['user_id' =>  $user->id,'holiday_allowance' => 10]);

        $this->signIn($user);
        $array = [
            'company_id'=> auth()->user()->company_id,
            'user_id'   => $user->id,
            'start_date' => $this->start,
            'end_date' =>   $this->end
        ];

        $this->post('/holiday/add', $array);

        $this->assertDatabaseHas('holidays', ['user_id' => $user->id]);


    }

    /**
     * @test
     */
    public function admin_user_can_add_holiday()
    {
        $this->signIn();
        $user = create('App\User');
        create('App\UserData', ['user_id' =>  $user->id,'holiday_allowance' => 10]);
        $array = [
            'company_id'=> auth()->user()->company_id,
            'user_id'   => $user->id,
            'start_date' => $this->start,
            'end_date' =>   $this->end
        ];

        $this->post('/holiday/add', $array);
        $this->assertDatabaseMissing('holidays', ['user_id' => $user->id]);

        $this->adminSignIn();
        $this->post('/holiday/add', $array);
        $this->assertDatabaseHas('holidays', ['user_id' => $user->id]);


    }

    /**
     * @test
     */
    public function admin_can_delete_holiday_and_update_allowance()
    {
        $this->signIn();
        $user = create('App\User');
        create('App\UserData', ['user_id' =>  $user->id,'holiday_allowance' => 10]);

        $array = [
            'company_id'=> auth()->user()->company_id,
            'user_id'   => $user->id,
            'start_date' => $this->start,
            'end_date' =>   $this->end
        ];
        $holiday = create('App\Holiday', $array); // allowance drops to 4 after creating
        $this->delete('/holiday/delete/'.$holiday->id);
        $this->assertDatabaseHas('holidays', ['id' => $holiday->id]);
        $this->assertDatabaseHas('user_data', ['holiday_allowance' => 4]);

        $this->adminSignIn();
        $this->delete('/holiday/delete/'.$holiday->id);
        $this->assertDatabaseMissing('holidays', ['id' => $holiday->id]);
        $this->assertDatabaseHas('user_data', ['holiday_allowance' => 10]); // go back to 10



    }
    /**
     * @test
     */
    public function user_can_delete_his_own_holiday()
    {
        $this->signIn();
        $user = create('App\User');
        create('App\UserData', ['user_id' =>  $user->id,'holiday_allowance' => 10]);

        $array = [
            'company_id'=> auth()->user()->company_id,
            'user_id'   => $user->id,
            'start_date' => $this->start,
            'end_date' =>   $this->end
        ];
        $holiday = create('App\Holiday', $array);
        $this->delete('/holiday/delete/'.$holiday->id);
        $this->assertDatabaseHas('holidays', ['id' => $holiday->id]);
        $this->signIn($user);
        $this->delete('/holiday/delete/'.$holiday->id);
        $this->assertDatabaseMissing('holidays', ['id' => $holiday->id]);
    }

    /**
     * @test
     */
    public function user_can_update_his_own_holiday()
    {
        $this->signIn();
        create('App\UserData', ['user_id' =>  auth()->user()->id,'holiday_allowance' => 10]);
        $new_start = \Carbon\Carbon::createFromFormat('Y-m-d H:s:i', '2015-5-2 3:30:34');
        $array = [
            'company_id'=> auth()->user()->company_id,
            'user_id'   => auth()->user()->id,
            'start_date' => $this->start,
            'end_date' =>   $this->end
        ];
        $new_array = [
            'user_id'   => auth()->user()->id,
            'start_date' =>  $new_start,
            'end_date' =>   $this->end
        ];
        $holiday = create('App\Holiday', $array);
        $this->patch('/holiday/update/'.$holiday->id, $new_array );
        $this->assertDatabaseHas('holidays', ['start_date' => $new_start]);

    }
    /**
     * @test
     */
    public function admin_can_update_all_holiday()
    {

        $new_start   = \Carbon\Carbon::createFromFormat('Y-m-d H:s:i', '2015-5-2 9:30:34');


        $user = create('App\User');
        $user2 = create('App\User');
        $this->signIn($user);
        create('App\UserData', ['user_id' =>  $user->id,'holiday_allowance' => 10]);

        $array = [
            'company_id'=> auth()->user()->company_id,
            'user_id'   => $user->id,
            'start_date' => $this->start,
            'end_date' =>   $this->end
        ];
        $new_array = ['user_id' => $user2->id,'start_date' => $new_start, 'end_date' => $this->end];
        $holiday = create('App\Holiday', $array);
        $this->patch('/holiday/update/'.$holiday->id, $new_array );
        $this->assertDatabaseHas('holidays', ['start_date' => $this->start]); // not changed
        $this->adminSignIn();
        $this->patch('/holiday/update/'.$holiday->id, $new_array );
        $this->assertDatabaseHas('holidays', ['start_date' => $new_start]); // has changed

    }

    /**
     * @test
     */
    public function update_holiday_allowance_on_create()
    {


        $this->adminSignIn();
        $user = create('App\UserData', ['user_id' =>  auth()->user()->id,'holiday_allowance' => 10]);

        $array = [
            'company_id'=> auth()->user()->company_id,
            'user_id'   => auth()->user()->id,
            'start_date' => $this->start,
            'end_date' =>   $this->end
        ];
        $holiday = create('App\Holiday', $array);

        $this->assertDatabaseHas('holidays', ['id' => $holiday->id]);
        $this->assertDatabaseHas('user_data', ['holiday_allowance' => 4]);

    }

    /**
     * @test
     */
    public function update_holiday_allowance_on_update()
    {
        $new_start = \Carbon\Carbon::createFromFormat('Y-m-d H:s:i', '2015-5-2 3:30:34');

        $this->adminSignIn();
        $user = create('App\UserData', ['user_id' =>  auth()->user()->id,'holiday_allowance' => 10]);
        $array = [
            'company_id'=> auth()->user()->company_id,
            'user_id'   => auth()->user()->id,
            'start_date' => $this->start,
            'end_date' =>   $this->end
        ];
        $holiday = create('App\Holiday', $array);
        $this->assertDatabaseHas('user_data', ['holiday_allowance' => 4]);

        $new_array = ['user_id'   => $user->id,'start_date' => $new_start, 'end_date' => $this->end];
        $this->patch('/holiday/update/'.$holiday->id, $new_array ); // allowance goes back to 10
        $this->assertDatabaseHas('user_data', ['holiday_allowance' => 0]); // allowance drops to 0
    }

}
