<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    use RecordsActivity;
    protected $guarded = [];
    protected $with = ['supervisor'];

   public static function boot()
   {
       // call parent
       parent::boot();

       static::deleted(function ($department) {
           UserData::where('department', $department->id)->update(['department' => null]);
           Role::where('department_id', $department->id)->update(['department_id' => null]);
       });
   }

    public function supervisor()
    {
        return $this->belongsTo(User::class, 'supervisor_id');

    }

    public function roles()
    {
        return $this->hasMany(Role::class, 'department_id');
    }

}
