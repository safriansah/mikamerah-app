<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function sentRequest($data)
    {
        // \dd($data);
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => $data->url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => $data->method,
            CURLOPT_POSTFIELDS => $data->body,
            CURLOPT_HTTPHEADER => array(
                'Content-Type: application/json',
                'token: '.(isset($data->token) ? $data->token : ''),
                'param: '.(isset($data->param) ? $data->param : '{}'),
            ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        // echo $response;
        return $response;
    }

    public function getResponse($code, $message = false, $data = false){
        if (!$message) {
            switch ($code) {
                case 200:
                    # code...
                    $message = 'Success';
                    break;
                case 401:
                    # code...
                    $message = 'Unauthorized';
                    break;
                case 404:
                    # code...
                    $message = 'Not Found';
                    break;
                case 406:
                    # code...
                    $message = 'Not Accepted';
                    break;
                case 500:
                    # code...
                    $message = 'Error';
                    break;
                default:
                    # code...
                    $message = 'Undefined';
                    break;
            }
        }

        $response = [
            "responseCode"=> $code . '',
            "responseMessage"=> $message
        ];

        if ($data) {
            $response['data'] = $data;
        }

        return response($response);
    }
}
