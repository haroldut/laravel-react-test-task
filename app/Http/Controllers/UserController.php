<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function  index(Request $request)
    {
        $userType = $request->type;
        $usersCacheKey = is_null($userType) ? 'users' : 'users.'.$userType;

        if(Cache::has($usersCacheKey))
        {
            $users = Cache::get($usersCacheKey);
        }
        else
        {
            $users = is_null($userType) ? User::all() : User::where('user_type',$userType)->get();
            Cache::put($usersCacheKey, $users, now()->addMinutes(10));
        }

        return response()->json(['users' => $users]);
    }
}
