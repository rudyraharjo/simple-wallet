<?php
namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Spatie\Permission\Traits\HasRoles;
use Spatie\Permission\Traits\HasPermissions;
use App\User;

class AuthController extends ResponseBaseController
{

    use IssuTokenTrait;

    public function signin(Request $request){
        try{

            $validator = Validator::make($request->all(), [
                'username' => 'required|string',
                'password' => 'required|string',
            ]);    

            $loginType = filter_var($request->username, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';
            
            $credentials = [
                $loginType => $request->username,
                'password' => $request->password
            ];
            
            //$credentials = request(['username', 'password']);          
            
            if ($validator->fails()){
                
                
                return $this->sendError('Failed to login.',  $validator->errors());

            } else if(!Auth::attempt($credentials)) {
                
                return $this->sendError('Unauthorized Please Check Email & Password',  $credentials);

            } else {

                // return $request->user()->getAllPermissions();
                // $user = $request->user()->id;
                // $getAllPermissions = $user->getAllPermissions();
                //$UserDetail = User::with('roles')->where('id', '=', $request->user()->id)->firstOrFail();
                //$USER = $request->user();
                //return $request->user();
                $userDetail = [
                    "id" => $request->user()->id,
                    "name" => $request->user()->name,
                    "email" => $request->user()->email,
                    "role" => $request->user()->roles[0]->name
                ];                
                
                $request->request->add([
                    'username' =>$request->user()->email,
                    'scope' => $request->user()->getRoleNames()[0]
                ]);
                
                $GetIssuToken = $this->RequestToken($request, 'password');
                
                if($GetIssuToken){

                    $TokenType = json_decode($GetIssuToken->getBody())->token_type;
                    
                    if($TokenType == "Bearer"){

                        $token_user = array(
                            "token" => json_decode((string) $GetIssuToken->getBody(), true),
                            "user" => $userDetail
                        );
                        
                        return $this->sendSuccess($token_user, 'SUCCESS LOGIN', 200);

                    }
                    
                    return $this->sendError('FAILED TO LOGIN',  'FAILED CREATED TOKEN', 403);

                } else {
                    
                    return $this->sendError('FAILED TO LOGIN',  'FAILED CREATED TOKEN', 403);
                }

            } 

        } catch(Exception $e){
            
            return $this->sendError('SERVER ERROR',  $e->getMessage(), 500);

        }
    }

    public function signup(Request $request){

        try{

            $validator = Validator::make($request->all(), [
                'name' => 'required|string',
                'username' => 'required|string',
                'email' => 'required|string|email|unique:users',
                'password' => 'required|string',
            ]); 

            if ($validator->fails()){ 

                return response()->json([
                    'success' => false,
                    'message' => $validator->errors()
                ]);

            } else {

                $CreateUser = \App\User::create([
                    'name' => $request->name,
                    'username' => $request->username,
                    'email' => $request->email,
                    'password' => bcrypt($request->password)
                ])->assignRole('customer');

                if(!$CreateUser){
                    return response()->json([
                        'success' => false,
                        'message' => $CreateUser
                    ]);
                }
                
                $login = $this->signin($request);
                
                if($login->original["success"] == true){
                    return $this->sendSuccess($login->original["result"], 'REGISTER SUCCESS', 201);    
                } else {
                    return $this->sendSuccess($login->original, 'REGISTER FAILED', 404);
                }
                
                
                
            }

        }  catch(Exception $e){
            
            return $this->sendError('SERVER ERROR',  $e->getMessage(), 500);

        }
    }
    
    public function Me(){
        return response()->json(auth()->user());  
    }

    public function token_refresh(Request $request){
        //return response()->json($request);
        
        try{
            $clientID=2;

            $GetIssuToken = $this->RefreshToken($request, 'refresh_token', $clientID);

            if($GetIssuToken){
                $token_user = array(
                    "token" => json_decode((string) $GetIssuToken->getBody(), true)
                );
                return $this->sendSuccess($token_user, 'SUCCESS REFRESH TOKEN', 200);
            }

            return $this->sendError('FAILED REFRESH TOKEN',  'FAILED REFRESH TOKEN', 403);

        } catch(\Exception $e){            
            return $this->sendError('SERVER ERROR',  $e->getMessage(), 500);
        }        

    }

    public function logout(Request $request)
    {           
        try{

            $logout = $request->user()->tokens->each(function ($token, $key) {
                //$token->delete();
                $token->revoke();
            });

            if(!$logout){
                return $this->sendError('REVOKE FALSE',  'FAILED SIGNOUT', 403);
            }

            return $this->sendSuccess('REVOKE TRUE', 'SUCCESS SIGNOUT', 200);

        } catch(\Exception $e){            
            return $this->sendError('SERVER ERROR',  $e->getMessage(), 500);
        }
        
    }
}
