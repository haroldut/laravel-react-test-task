<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class CacheController extends Controller
{
    public function refresh()
    {
        Cache::flush();
        return response()->json(['ok' => true]);
    }
}
