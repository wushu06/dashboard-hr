<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\User;
use App\Kudos;
use App\Department;
use App\UserData;
use Illuminate\Support\Str;
use Faker\Generator as Faker;
use Illuminate\Support\Facades\Schema;
use App\Company;
use App\Role;
use App\Like;
use App\Holiday;
/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'remember_token' => Str::random(10),
        'company_id' => function () {
            if(count(Company::all()) > 2){
                return Company::all()->random()->id;
            }
            return factory('App\Company')->create()->id;

        }

    ];
});
//$2y$10$zvjS/o5DUILQ9XTUU61GteV6c2qC/Tl1lLEnMTFl4Da95dWtl7DEm
$factory->define(UserData::class, function (Faker $faker) {
    $userId = null;
    return [

        'holiday_allowance' => random_int(1, 35),
        'user_id' => function () {
            return $userId = factory('App\User')->create()->id;
        },
        'role' => $faker->word,
        'approver' => $userId,
        'dob' => $faker->dateTimeThisDecade(),
        'tel' => random_int(7, 8),
        'address'=> $faker->text,
        'postcode' => $faker->text(5),
        'department'=> function () {
            return factory('App\Department')->create()->id;
        },

    ];
});


$factory->state(App\User::class, 'admin', function () {
    return [
        'is_admin' => 1
    ];
});

$factory->state(App\User::class, 'notAdmin', function () {
    return [
        'is_admin' => 0
    ];
});

$factory->define(App\Company::class, function ($faker) {
    $name = $faker->word;
    return [
        'company_name' => $name
    ];
});

$factory->define(Kudos::class, function (Faker $faker) {
    return [
        'sender_id' => User::all()->random()->id,
        'company_id' => Company::all()->random()->id,
        'receiver_id' =>  function () {
             return factory('App\User')->create()->id;
         },
        'text' => $faker->text

    ];
});

$factory->define(Department::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
        'company_id' => Company::all()->random()->id,
        'supervisor_id' =>  function () {
             return User::all()->random()->id;
         }

    ];
});

$factory->define(Role::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
        'company_id' => Company::all()->random()->id,
        'department_id' =>  function () {
             return Department::all()->random()->id;
         }

    ];
});

$factory->define(Like::class, function (Faker $faker) {
    return [
        'kudos_id' => Kudos::all()->random()->id,
        'user_id'  => 1,
        'receiver_id'  => User::all()->random()->id
    ];
});

$factory->define(Holiday::class, function (Faker $faker) {
    $date = \Carbon\Carbon::create(2019, 5, 28, 0, 0, 0);
    return [
        'user_id' => User::all()->random()->id,
        'company_id' => Company::all()->random()->id,
        'start_date'  => $date->format('Y-m-d H:i:s'),
        'end_date'  => $date->addWeeks(rand(1, 2))->format('Y-m-d H:i:s')
    ];
});