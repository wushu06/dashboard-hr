<?php
namespace App\Services;

use App\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class EmployeeService
{
    private $employeeService;

    public function __construct(EmployeeService $employeeService)
    {
        $this->employeeService = $employeeService;
    }

    public function search($user_id)
    {
        $user = User::find($user_id);
        if (!$user) {
            throw new ModelNotFoundException('User not found by ID ' . $user_id);
        }
        return $user;
    }

}
