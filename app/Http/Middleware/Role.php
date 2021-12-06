<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class Role
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next, ... $roles)
    {
        if (!Auth::check()) // it really should be part of your 'auth' middleware, most likely added as part of a route group.
            return response([
                'message' => 'Login to get access'
            ], 401);

        $user = Auth::user();

        // if($user->isAdmin())
        //     return $next($request);

        foreach($roles as $role) {
            // Check if user has the role This check will depend on how your roles are set up
            if($user->hasRole($role))
                return $next($request);
        }
        return response([
            'message' => 'Unauthorized User'
        ], 401);
    }
}
