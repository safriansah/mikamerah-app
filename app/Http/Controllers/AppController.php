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
                // return json_encode($data);
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

            else if ($api == 'getTransaction') {
                # code...
                $param = [];
                if ($request->id) {
                    # code...
                    array_push($param, '"id": "'.$request->id.'"');
                }
                if ($request->parent) {
                    # code...
                    array_push($param, '"parent": "'.$request->parent.'"');
                }
                // return implode(',', $param);
                $data = (object)[
                    'url' => env('API_HOST', 'localhost:8200').'/api/transactions',
                    'method' => 'GET',
                    'body'=> $request->getContent(),
                    'token' => $request->header('token'),
                    'param' => '{'.implode(',', $param).'}'
                ];
                
                // return $data->param;
            }

            elseif ($api == 'saveTransaction') {
                # code...
                $data = (object)[
                    'url' => env('API_HOST', 'localhost:8200').'/api/transactions',
                    'method' => 'POST',
                    'body'=> $request->getContent(),
                    'token' => $request->header('token')
                ];
            }

            elseif ($api == 'updateTransaction') {
                # code...
                $data = (object)[
                    'url' => env('API_HOST', 'localhost:8200').'/api/transactions',
                    'method' => 'PUT',
                    'body'=> $request->getContent(),
                    'token' => $request->header('token')
                ];
            }

            elseif ($api == 'deleteTransaction') {
                # code...
                $data = (object)[
                    'url' => env('API_HOST', 'localhost:8200').'/api/transactions',
                    'method' => 'DELETE',
                    'body'=> $request->getContent(),
                    'token' => $request->header('token')
                ];
            }

            if ($data) {
                // return $data->url;
                $result = json_decode($this->sentRequest($data), true);
                // dd($data);
            }
            
            return $result;
        } catch (\Throwable $th) {
            //throw $th;
            return $this->getResponse(500, $th->getMessage());
        }
    }
}
