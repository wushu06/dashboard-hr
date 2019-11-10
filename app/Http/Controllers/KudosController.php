<?php

namespace App\Http\Controllers;

use App\Events\KudosEvent;
use App\Kudos;
use App\Mail\GotKudos;
use App\Notifications\KudosReceived;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class KudosController extends Controller
{

    public function __construct()
    {

       $this->middleware('auth');

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $kudoz = Kudos::where('company_id', auth()->user()->company_id)->latest()->paginate(10);

        if (request()->wantsJson()) {

            return $kudoz;
        }
        return view('kudos.index', compact('kudoz'));
    }

    public function group($page = 1)
    {

        $rawQuery = DB::select(
            DB::raw(
                "SELECT DISTINCT SQL_CALC_FOUND_ROWS
                            users.name, COUNT(kudos.receiver_id) as total, totalLikes
                            From kudos
                            left JOIN users  on users.id = kudos.receiver_id  
                            LEFT OUTER JOIN 
                           ( SELECT receiver_id,
                                    COUNT(*) as totalLikes                    
                             FROM   `likes` 
                             GROUP  BY receiver_id
                           ) AS likes 
                                    ON users.id = likes.receiver_id
                           WHERE kudos.company_id = ".auth()->user()->company_id."
       
                            GROUP BY kudos.receiver_id ORDER BY total DESC, totalLikes DESC LIMIT 10 OFFSET ".$page
            )
        );
        //dd($rawQuery);

        $query = 'SELECT FOUND_ROWS() as result';
        $queryTotal =  DB::select(
                         DB::raw(
                             $query
                         )
                     );

        if (request()->wantsJson()) {

            return json_encode([$rawQuery, $queryTotal]);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        $users = User::where('id', '!=', auth()->id())->get();
        return view('kudos.add', compact('users'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        if( request('receiver_id') == auth()->id()){
            return redirect('/kudos');
        }
       /* request()->validate([
            'title' => 'required|spamfree',
            'body' => 'required|spamfree',
            'channel_id' => 'required|exists:channels,id',
            'g-recaptcha-response' => ['required', $recaptcha]
        ]);*/
        request()->validate([
            'text' => 'required|spamfree',
            'receiver_id' => ['required'],
        ]);
        $kudos = Kudos::create([
            'company_id' => auth()->user()->company_id,
            'sender_id' => auth()->user()->id,
            'receiver_id' => request('receiver_id'),
            'text' => request('text')
        ]);
        //preg_match_all('/\@([^\s\-]+)/', $kudos->name, $matches);
        $user = User::where('id', $kudos->receiver_id)->first();
        if($user){
            $user->notify(new KudosReceived($kudos));

        }
        if (request()->wantsJson()) {
            return response(['Kudos has been updated'], 200);
        }
        return redirect(route('kudos'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Kudos  $Kudos
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {


        $kudoz = Kudos::where('receiver_id', $user->id)->latest()->get();
        return view('kudos.mine', compact('kudoz'));
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Kudos  $Kudos
     * @return \Illuminate\Http\Response
     */
    public function destroy(Kudos $Kudos)
    {
        $this->authorize('view', auth()->user());
        $Kudos->delete();
        if (request()->wantsJson()) {
            return response(['Kudos has been deleted'], 204);
        }
        return back();
    }
}
