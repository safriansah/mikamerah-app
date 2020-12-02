<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AppController extends Controller
{
    //
    public function index(Request $request)
    {
        return view('app');
    }

    public function page($page)
    {
        return view('page.'.$page);
    }

    public function api(Request $request, $api)
    {
        try {
            $result = $this->getResponse(400);
            $data = false;
            if ($api == 'register') {
                $data = (object)[
                    'url' => env('API_HOST', 'localhost:8200').'/api/register',
                    'method' => 'POST',
                    'body'=> $request->getContent()
                ];
            }
            else if ($api == 'login') {
                # code...
                $data = (object)[
                    'url' => env('API_HOST', 'localhost:8200').'/api/login',
                    'method' => 'POST',
                    'body'=> $request->getContent()
                ];
            }
            else if ($api == 'checkToken') {
                $data = (object)[
                    'url' => env('API_HOST', 'localhost:8200').'/api/checkToken',
                    'method' => 'POST',
                    'body'=> $request->getContent()
                ];
            }
            else if ($api == 'logout') {
                $data = (object)[
                    'url' => env('API_HOST', 'localhost:8200').'/api/logout',
                    'method' => 'POST',
                    'body'=> $request->getContent()
                ];
            }
            else if ($api == 'saveProfile') {
                # code...
                $data = (object)[
                    'url' => env('API_HOST', 'localhost:8200').'/api/updateProfile',
                    'method' => 'POST',
                    'body'=> $request->getContent(),
                    'token' => $request->header('token')
                ];
            }
            else if ($api == 'saveUsername') {
                # code...
                $data = (object)[
                    'url' => env('API_HOST', 'localhost:8200').'/api/updateUsername',
                    'method' => 'POST',
                    'body'=> $request->getContent(),
                    'token' => $request->header('token')
                ];
            }
            else if ($api == 'savePassword') {
                # code...
                $data = (object)[
                    'url' => env('API_HOST', 'localhost:8200').'/api/updatePassword',
                    'method' => 'POST',
                    'body'=> $request->getContent(),
                    'token' => $request->header('token')
                ];
            }

            if ($data) {
                $result = json_decode($this->sentRequest($data), true);
            }
            
            return $result;
        } catch (\Throwable $th) {
            //throw $th;
            return $this->getResponse(500, $th->getMessage());
        }
    }
}
