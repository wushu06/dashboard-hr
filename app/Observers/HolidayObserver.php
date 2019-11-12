<?php

namespace App\Observers;

use App\Holiday;
use App\UserData;
use Illuminate\Http\Request;

class HolidayObserver
{
    protected $allowance;
    /**
     * Handle the holiday "created" event.
     *
     * @param  \App\Holiday  $holiday
     * @return void
     */
    public function created(Holiday $holiday)
    {
        $this->updateAllowance($holiday);

    }

    public function updating(Holiday $holiday)
    {
        $holiday = Holiday::where('id', $holiday->id)->first();
        $allowance = $this->countHoliday($holiday);
        $meta = UserData::where('user_id', $holiday->user_id);
        $start = \Carbon\Carbon::createFromFormat('Y-m-d H:s:i', request('start_date'));
        $end   = \Carbon\Carbon::createFromFormat('Y-m-d H:s:i',request('end_date'));
        $diff_in_days =  $start->diffInDays($end) +1;
        if($meta->first()->holiday_allowance + $allowance  < $diff_in_days ) {
            throw new \Exception('You don\'t have enough allowance.');
        }
        $meta->update(['holiday_allowance' =>  ($meta->first()->holiday_allowance + $allowance) - $diff_in_days ]);
    }

    /**
     * Handle the holiday "updated" event.
     *
     * @param  \App\Holiday  $holiday
     * @return void
     */
    public function updated(Holiday $holiday)
    {
       // $this->updateAllowance($holiday, true);
    }

    /**
     * Handle the holiday "deleted" event.
     *
     * @param  \App\Holiday  $holiday
     * @return void
     */
    public function deleting(Holiday $holiday)
    {
        $old_allowance = $this->rollBackHolidayAllowance($holiday);
        $meta = UserData::where('user_id', $holiday->user_id);
        $allowance = $old_allowance + $meta->first()->holiday_allowance;

        $meta->update(['holiday_allowance' => $allowance]);
    }

    /**
     * Handle the holiday "restored" event.
     *
     * @param  \App\Holiday  $holiday
     * @return void
     */
    public function restored(Holiday $holiday)
    {
        //
    }

    /**
     * Handle the holiday "force deleted" event.
     *
     * @param  \App\Holiday  $holiday
     * @return void
     */
    public function forceDeleted(Holiday $holiday)
    {
        //
    }

    public function updateAllowance($holiday)
    {
        $diff_in_days =  $this->countHoliday($holiday);
        $meta = UserData::where('user_id', $holiday->user_id);
         if($meta->first()->holiday_allowance < $diff_in_days ) {
             throw new \Exception('You don\'t have enough allowance.');
         }
        $holiday_allowance =  $meta->first()->holiday_allowance - $diff_in_days;
        $meta->update(['holiday_allowance' =>  $holiday_allowance]);
    }

    public function rollBackHolidayAllowance($old_holiday)
    {
        $holiday = Holiday::where('id', $old_holiday->id)->first();
        return $this->countHoliday($holiday);
    }

    public function countHoliday($holiday)
    {
        $start = \Carbon\Carbon::createFromFormat('Y-m-d H:s:i', $holiday->start_date);
        $end   = \Carbon\Carbon::createFromFormat('Y-m-d H:s:i', $holiday->end_date);
        return $start->diffInDays($end) +1; // 2

    }


}
