<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Kudos extends Model
{
    //
    use RecordsActivity;
    protected $guarded = [];
    protected $with = ['receiver', 'sender', 'likes'];

    public static function boot()
    {
        // call parent
        parent::boot();

        static::deleted(function ($kudos) {
            Like::where('kudos_id', $kudos->id)->delete();
        });
    }


    public function receiver()
    {
        return $this->belongsTo(User::class, 'receiver_id');
    }

    public function sender()
    {
        return $this->belongsTo(User::class, 'sender_id');
    }

    public function likes()
    {
        return $this->hasMany(Like::class, 'kudos_id');
    }
}
