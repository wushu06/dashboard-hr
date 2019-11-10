<?php

namespace App\Http\Controllers\Auth;

use App\HandleEmployeeRequest;
use App\Http\Controllers\CompaniesController;
use App\Http\Controllers\UserDataController;
use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers,  HandleEmployeeRequest;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('guest');
    }
    public function register(Request $request)
    {

        $this->validator($request->all())->validate();

        event(new Registered(
            $user =  Auth::check() ?  $this->registerEmployee($request) : $this->create($request->all()
            )
        ));

        return $this->registered($request, $user)
            ?: redirect($this->redirectPath());
    }

    protected function redirectTo()
    {
        if (Auth::check()) {
            return '/employees';
        }

        return '/login';
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    public function validator(array $data)
    {

        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => Auth::check() ? [] : ['required', 'string', 'min:6', 'confirmed'],
        ]);


    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    public function create( array $data)
    {


        $companyContoller = new CompaniesController();
        if($company_id = $companyContoller->store($data['company_name'])){
            return User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'company_id' => $company_id->id,
                'password' => Hash::make($data['password']),
            ]);
        }

    }

    public function registerEmployee(Request $request)
    {
        $this->authorize('view', auth()->user());
        $user = User::create($this->requestArray($request, true));
        if($user){
            $userData = new UserDataController();
            $userData->store($request->all(), $user->id);
        }
        if (request()->wantsJson()) {
            return response(['User has been created'], 200);
        }
        return $user;


    }
}
