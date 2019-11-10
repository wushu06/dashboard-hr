<?php

namespace App\Http\Controllers;

use App\Holiday;
use App\User;
use Illuminate\Http\Request;

class HolidayController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($page = null)
    {
        $holidays = Holiday::where('company_id', auth()->user()->company_id)->latest()->paginate(10);
        if (request()->wantsJson()) {

            return $holidays;
        }
        return view('holidays.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = User::where('id', request('user_id'))->first();
        $this->authorize('update', $user);
         $response = Holiday::create([
            'company_id'=> auth()->user()->company_id,
            'user_id'   => request('user_id'),
            'start_date' => request('start_date'),
            'end_date' =>   request('end_date')
        ]);

        if (request()->wantsJson() ) {
            return response(json_encode($response), 200);
        }
        return redirect('/holidays');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Holiday  $holiday
     * @return \Illuminate\Http\Response
     */
    public function show(Holiday $holiday)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Holiday  $holiday
     * @return \Illuminate\Http\Response
     */
    public function edit(Holiday $holiday)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Holiday  $holiday
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $holiday = Holiday::where('id', $id)->first();
        $user = User::where('id', request('user_id'))->first();
        $this->authorize('update', $user);
        $response = $holiday->update([
            'start_date' => request('start_date'),
            'end_date' => request('end_date')
        ]);
        if (request()->wantsJson()) {
            return response(json_encode($response), 200);
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Holiday  $holiday
     * @return \Illuminate\Http\Response
     */
    public function destroy(Holiday $holiday)
    {
        $user = User::where('id', $holiday->user_id)->first();
        $this->authorize('update', $user);

        $holiday->delete();
        if (request()->wantsJson()) {
            return response(['Holiday has been deleted'], 204);
        }
    }
}
