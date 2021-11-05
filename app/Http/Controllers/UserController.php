<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function  index()
    {
        if(Cache::has('users'))
        {
            $users = Cache::get('users');
        }
        else
        {
            $users = User::all();
            Cache::put('users', $users, now()->addMinutes(10));
        }

        return response()->json(['users' => $users]);
    }
}
