<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return view('welcome');
});

Auth::routes([
    'verify' => true,
    'reset' => true
]);
Route::get('register', 'Auth\RegisterController@showRegistrationForm')->middleware('guest')->name('register');
Route::group(['middleware' => ['auth', 'verified']], function () {

    Route::post('/employees/create', 'Auth\RegisterController@register')->name('addEmployee');
    Route::get('/home', 'HomeController@index')->name('home');

// employeesController
    Route::get('/user/edit/{user}', 'EmployeesController@edit');
    Route::get('/employees/{page?}', 'EmployeesController@index')->name('employees');
    Route::get('/employee/{user}', 'EmployeesController@show')->name('profile');
    Route::get('/employees/add', 'EmployeesController@create')->middleware('is_admin');
    Route::patch('/user/update/{user}', 'EmployeesController@update');
    Route::delete('/user/delete/{user}', 'EmployeesController@destroy');

// kudosController
    Route::get('/kudos/add', 'KudosController@create')->name('addKudos');
    Route::get('/kudos/', 'KudosController@index')->name('kudos');
    Route::get('/kudos/group/{page}', 'KudosController@group');
    Route::get('/kudos/{user}', 'KudosController@show');
    Route::post('/kudos/add', 'KudosController@store');
    Route::delete('/kudos/delete/{kudos}', 'KudosController@destroy');

// notification
    Route::get('/profiles/{user}/notifications', 'UserNotificationController@index');
    Route::delete('/profiles/{user}/notifications/{notification}', 'UserNotificationController@destroy');

    // departments
    Route::get('/departments', 'DepartmentController@index');
    Route::get('/departments/create', 'DepartmentController@create');
    Route::post('/departments/add', 'DepartmentController@store')->name('addDepartment');
    Route::get('/departments/edit/{department}', 'DepartmentController@edit');
    Route::patch('/departments/update/{department}', 'DepartmentController@update');
    Route::delete('/departments/delete/{department}', 'DepartmentController@destroy');

    // roles
    Route::get('/roles', 'RoleController@index');
    Route::get('/roles/create', 'RoleController@create');
    Route::post('/roles/add', 'RoleController@store');
    Route::get('/roles/edit/{role}', 'RoleController@edit');
    Route::patch('/roles/update/{role}', 'RoleController@update');
    Route::delete('/roles/delete/{role}', 'RoleController@destroy');

    // likes
    Route::post('/likes/add', 'LikeController@store');
    Route::delete('/likes/delete/{like}', 'LikeController@destroy');

    // holiday
    Route::get('/holidays/{page?}', 'HolidayController@index');
    Route::post('/holiday/add', 'HolidayController@store');
    Route::patch('/holiday/update/{holiday}', 'HolidayController@update');
    Route::delete('/holiday/delete/{holiday}', 'HolidayController@destroy');


});