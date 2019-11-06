<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function createUser(Request $request) : User
    {
        $inputData = $request->all();
        $user = User::create([
            'first_name' => $inputData['first_name'],
            'last_name' => $inputData['last_name'],
            'email' => $inputData['email'],
            'password' => $inputData['password'],
            'former_name' => $inputData['former_name'],
            'headline' => $inputData['headline'],
            'user_id' => 1,
        ]);
        return $user;
    }
}
