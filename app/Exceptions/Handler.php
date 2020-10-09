<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Validation\ValidationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {
        
        if ($exception instanceof \Symfony\Component\HttpKernel\Exception\NotFoundHttpException) {
            $data = [
                'success'   => false,
                'message' => 'The route is not defined'
            ];
            return response()->json($data, 404);
        }

        if ($exception instanceof \Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException) {
            $data = [
                'success'   => false,
                'message' => 'The http method not allowed'
            ];
            return response()->json($data, 404);
        }

        if ($exception instanceof ValidationException)
        {
            return response([
                "error"=>$exception->errors()
            ])->header('Content-Type', 'application/json');
        }

        return response()->json([
            'success' => false,
            'message' => 'Unauthorized '. $exception->getMessage(),
        ], 401);

        // return parent::render($request, $exception);
    }
}