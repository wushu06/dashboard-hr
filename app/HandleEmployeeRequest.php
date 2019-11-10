<?php
namespace App;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Intervention\Image\ImageManagerStatic as Image;

trait HandleEmployeeRequest
{
    public function getImageName(Request $request)
    {
        return  request()->file('avatar')
            ? str_replace(' ', '',request('name')).
            '-'.request('email').
            '.'.request()->file('avatar')->getClientOriginalExtension()
            : '';

    }

    public function requestArray(Request $request, $password = false)
    {
        $name = $this->getImageName($request);

        $array = [
            'name' => request('name'),
            'email' => request('email'),
            'company_id' => auth()->user()->company_id,
            'is_admin' => request('is_admin') == 1,
        ];

       if($request->get('avatar')){
           // $array['avatar_path'] =  request()->file('avatar')->storeAs('avatars',$name);
           $imageData = $request->get('avatar');
           $fileName =  request('email') . '.' . explode('/', explode(':', substr($imageData, 0, strpos($imageData, ';')))[1])[1];
           if(Image::make($request->get('avatar'))->save(public_path('avatars/').$fileName)){
               $array['avatar_path'] = 'avatars/'.$fileName;
           }

        }


        if($password){
            $array['password'] = Hash::make(str_random(8));
        }
        return $array;

    }

    public function userDataArray($data, $user_id = null)
    {
        $array = [
            'address' =>  $data['address'] ,
            'tel' => $data['tel'],
            'department' => $data['department'],
            'dob' => $data['dob'],
            'approver' => $data['approver'],
            'role' => $data['role'],
            'holiday_allowance' => $data['holiday_allowance'],
        ];
        if($user_id) {
            $array['user_id'] = $user_id;
        }
        return $array;
    }

}