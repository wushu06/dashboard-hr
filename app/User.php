<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements MustVerifyEmail
{
    use Notifiable, RecordsActivity;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];
    protected $with = ['company', 'userData'];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    const ADMIN_TYPE = 1;
    const DEFAULT_TYPE = 0;

    public function isAdmin()
    {

        return $this->is_admin == self::ADMIN_TYPE;
    }

    public static function boot()
    {
        // call parent
        parent::boot();

        static::deleted(function ($user) {
            Department::where('supervisor_id', $user->id)->update(['supervisor_id' => null]);
            UserData::where('user_id', $user->id)->delete();
        });
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function kudosReceiver()
    {
        return $this->hasMany(Kudos::class, 'receiver_id');
    }

    public function kudosSender()
    {
        return $this->hasMany(Kudos::class, 'sender_id');
    }

    public function isAdminOrSameId()
    {
        return auth()->user()->is_admin || auth()->id() == $this->id;
    }

    public function userData()
    {
        return $this->hasOne(UserData::class, 'user_id');
    }
    public function getSupervisor($id = null){
        if($id){
            return User::whereId($id)->first()->name;
        }
    }

    public function getDepartment($id = null){
        if($id){
            $department = Department::whereId($id)->first();
            $supervisor = $department->supervisor ? ', Supervisor: '.$department->supervisor->name : '';
            return $department->name.$supervisor;
        }
    }


}
