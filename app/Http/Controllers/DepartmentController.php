<?php

namespace App\Http\Controllers;

use App\Department;
use App\User;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $departments = Department::where('company_id', auth()->user()->company_id)->latest()->paginate(10);
        if (request()->wantsJson()) {

            return $departments;
        }
        return view('departments.index', compact('departments'));
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
        $departments = Department::all();
        return view('departments.create', ['departments' => $departments, 'users' => $users]);
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
        Department::create([
            'name' => request('name'),
            'company_id' => auth()->user()->company_id,
            'supervisor_id' => request('supervisor_id')
        ]);
        if (request()->wantsJson()) {
            return response(['Department has been created'], 200);
        }
        return redirect('/departments');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function show(Department $department)
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $this->authorize('view', auth()->user());
        $department =  Department::where('id', $id)->first();
        $users = User::all();
        return view('departments.edit', ['department' => $department, 'users' => $users]);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->authorize('view', auth()->user());
        $department = Department::where('id', $id)->first();
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
        ]);
        $department->update([
            'name' => request('name'),
            'supervisor_id' =>  request('supervisor_id')

        ]);
        if (request()->wantsJson()) {
            return response(['Department has been updated'], 200);
        }
        return redirect('/departments');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function destroy(Department $department)
    {
        $this->authorize('view', auth()->user());
        $department->delete();
        if (request()->wantsJson()) {
            return response(['Department has been deleted'], 204);
        }
        return redirect('/departments');
    }
}
