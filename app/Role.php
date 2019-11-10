<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use RecordsActivity;
    protected $guarded = [];
    protected $with = ['department'];


    public function department()
    {
        return $this->belongsTo(Department::class, 'department_id');

    }
}
