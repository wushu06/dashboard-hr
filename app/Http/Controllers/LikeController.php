<?php

namespace App\Http\Controllers;

use App\Like;
use Illuminate\Http\Request;

class LikeController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $like = Like::where('user_id', request('user_id'))->first();
        if($like) {
           // return;
        }
        Like::create([
            'kudos_id' => request('kudos_id'),
            'user_id' => auth()->user()->id,
            'receiver_id' => request('receiver_id'),
        ]);
        if (request()->wantsJson()) {
            return response(['Kudos has been liked!'], 200);
        }
    }





    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Like  $like
     * @return \Illuminate\Http\Response
     */
    public function destroy($kudosId)
    {
        $like = Like::where('kudos_id', $kudosId)->where('user_id', auth()->user()->id)->first();
        $like->delete();
        if (request()->wantsJson()) {
            return response(['Kudos has been unliked'], 204);
        }
        return back();
    }
}
