<?php

namespace App\Http\Controllers;

use App\Department;
use App\Employee;
use App\HandleEmployeeRequest;
use App\User;
use App\UserData;
use Illuminate\Http\Request;
use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\Validator;
use Mockery\Exception;

class EmployeesController extends Controller
{
    use HandleEmployeeRequest;
    public function __construct()
    {
        // all
        $this->middleware('auth');

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(User $user, $page = null)
    {


        if(!$page){
            $users= User::where('company_id', auth()->user()->company_id)->latest()->get();

        }else{
           $users = User::where('company_id', auth()->user()->company_id)->latest()->paginate(10);

        }



        $departments = Department::latest()->get();


        if (request()->wantsJson()) {

            return $users;
        }

        return view('employees.index', [ 'users' => $users,  'departments' => $departments]);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $employees = Employee::class;
        $user = '';
        $departments = Department::all();

        return view('employees.add', compact('employees', 'user', 'departments'));
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::where('id', $id)->first();
        if (request()->wantsJson()) {

            return $user;
        }

        return view('employees.profile', compact('user'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

        $user = User::where('id', $id)->first();
        $departments = Department::all();


        $this->authorize('update', $user);

        return view('employees.add', ['user' => $user, 'departments' => $departments]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::where('id', $id)->first();
        $this->authorize('update', $user);

        $user->update($this->requestArray($request));

        $userData = new UserDataController();
        $userData->update($request->all(), $id);
        if (request()->wantsJson()) {
            return response(['User has been updated'], 200);
        }
        return redirect('/user/edit/'.$id)->with('message', 'Profile updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        $user = User::where('id', $id)->first();
        $this->authorize('update', $user);
        $user->delete();
        if (request()->wantsJson()) {
            return response(['User has been deleted'], 204);
        }
        return back()->with('message', 'Profile deleted');

    }
}
