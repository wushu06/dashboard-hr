<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Holiday extends Model
{
    protected $guarded = [];
    protected $with = ['user'];



    public static function boot()
    {
        parent::boot();


       /* self::creating(function ($holiday) {
           self::calculateRemainingHolidays($holiday);
        });*/

       /* self::updating(function ($holiday) {
            die();
            self::calculateRemainingHolidaysWithRollback($holiday);
        });*/

        /*   self::deleting(function ($holiday) {
            $old_allowance = self::rollBackHolidayAllowance($holiday);
            $meta = UserData::where('user_id', $holiday->user_id);
            $allowance = $old_allowance + $meta->first()->holiday_allowance;
            $meta->update(['holiday_allowance' => $allowance]);

        });*/

    }

    public static function calculateRemainingHolidays($holiday, $old_allowance = null)
    {

        $start = \Carbon\Carbon::createFromFormat('Y-m-d H:s:i', $holiday->start_date);
        $end   = \Carbon\Carbon::createFromFormat('Y-m-d H:s:i', $holiday->end_date);
        $diff_in_days = $start->diffInDays($end) +1; // 2
        $meta = UserData::where('user_id', $holiday->user_id);
        if($meta->first()->holiday_allowance < $diff_in_days  && !$old_allowance) {

            die();
        }
        if($old_allowance < $diff_in_days  && $old_allowance) {
           die();
        }
        $holiday_allowance =  $meta->first()->holiday_allowance - $diff_in_days;

        $meta->update(['holiday_allowance' =>  $holiday_allowance]);

    }

    public static function calculateRemainingHolidaysWithRollback($holiday)
    {
        $old_allowance = self::rollBackHolidayAllowance($holiday);
        $meta = UserData::where('user_id', $holiday->user_id);
        $allowance = $old_allowance + $meta->first()->holiday_allowance;
       // $meta->update(['holiday_allowance' => $allowance]);
        self::calculateRemainingHolidays($holiday, $allowance);
    }

    public static function rollBackHolidayAllowance($old_holiday)
    {
        $holiday = Holiday::where('id', $old_holiday->id)->first();
        $start = \Carbon\Carbon::createFromFormat('Y-m-d H:s:i', $holiday->start_date);
        $end   = \Carbon\Carbon::createFromFormat('Y-m-d H:s:i', $holiday->end_date);
        return $start->diffInDays($end) +1; // 2
    }

    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    }
}
