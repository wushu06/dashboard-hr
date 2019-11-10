<?php

namespace App\Http\Controllers;

use App\Role;
use App\User;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $roles = Role::where('company_id', auth()->user()->company_id)->latest()->paginate(10);
        if (request()->wantsJson()) {

            return $roles;
        }
        return view('roles.index', compact('roles'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $this->authorize('view', auth()->user());
        $users = User::all();
        $roles = Role::all();
        return view('roles.create', ['roles' => $roles, 'users' => $users]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $this->authorize('view', auth()->user());
        $this->validate($request, [
            'name' => ['required', 'string', 'max:255'],
        ]);
        Role::create([
            'name' => request('name'),
            'company_id' => auth()->user()->company_id,
            'department_id' => request('department_id')
        ]);
        if (request()->wantsJson()) {
            return response(['Role has been created'], 200);
        }
        return redirect('/roles');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function show(Role $role)
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $this->authorize('view', auth()->user());
        $role =  Role::where('id', $id)->first();
        $users = User::all();
        return view('roles.edit', ['role' => $role, 'users' => $users]);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->authorize('view', auth()->user());
        $role = Role::where('id', $id)->first();
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
        ]);
        $role->update([
            'name' => request('name'),
            'department_id' =>  request('department_id')

        ]);
        if (request()->wantsJson()) {
            return response(['Role has been updated'], 200);
        }
        return redirect('/roles');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function destroy(Role $role)
    {
        $this->authorize('view', auth()->user());
        $role->delete();
        if (request()->wantsJson()) {
            return response(['Role has been deleted'], 204);
        }
        return redirect('/roles');
    }
}
