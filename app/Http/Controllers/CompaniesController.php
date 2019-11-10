<?php

namespace App\Http\Controllers;

use App\Company;
use Illuminate\Http\Request;

class CompaniesController extends Controller
{
    //
    public function store($companyName)
    {

       return Company::create([
           'company_name' => $companyName
        ]);
    }
}
