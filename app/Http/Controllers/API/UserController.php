<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\User;
use App\Transfer;
use App\Transactions;

class UserController extends ResponseBaseController
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
        
        try {
            return $this->sendSuccess($this->getUser(), 'GET DATA USER', 200);
            
        } catch(Exception $e){
            
            return $this->sendError('SERVER ERROR',  $e->getMessage(), 500);
        }     

    }

    public function getUser(){
        $User = auth('api')->user(); 

        $list_transaction = DB::table('transactions')
                    ->where('payable_id', $User->id)->orderBy('id', 'desc')->get();

        $type_con_tf = "";
        $type_con_rc_tf = "";
        $username = "";
        $list_history = [];
        
        if(count($list_transaction) > 0){
            for($z=0; $z<count($list_transaction); $z++) {
                
                $list_transfer = DB::table('transfers')->where('withdraw_id', $list_transaction[$z]->id)->get();
                $list_rc_transfer = DB::table('transfers')->where('deposit_id', $list_transaction[$z]->id)->get();
                $username = "";
                if(count($list_transfer) > 0){
                    
                    $type_con_tf = $list_transfer[0]->status;
                    $list_transaction2 = DB::table('transactions')->where('id', $list_transfer[0]->deposit_id)->get();
                    $getUser = DB::table('users')->where('id', $list_transaction2[0]->payable_id)->get();
                    $username = $getUser[0]->username;

                } else if(count($list_rc_transfer) > 0){
                    $type_con_tf = "menerima transfer";
                    $getWallet = DB::table('wallets')->where('id', $list_rc_transfer[0]->from_id)->get();
                    $getUser = DB::table('users')->where('id', $getWallet[0]->holder_id)->get();
                    $username = $getUser[0]->username;
                    //print_r($getWallet);
                } else {
                    $type_con_tf = $list_transaction[$z]->type;
                }
                
                $list_history[] = [
                    "ID" => $list_transaction[$z]->id,
                    "uuid" => $list_transaction[$z]->uuid,
                    "name" => $User->name,
                    "status" => $type_con_tf,
                    "description" => trim($type_con_tf . " " .$username),
                    "amount" => "Rp. " . number_format($list_transaction[$z]->amount,2,",",".")
                ];
            }
        }

        $data = [
            "id" => $User->id,
            "name" => $User->name,
            "username" => $User->username,
            "email" => $User->email,
            "wallet_id" => $User->wallet->id,
            "wallet_holder_id" => $User->wallet->holder_id,
            "wallet_balance" => "Rp. " . number_format($User->wallet->balance,2,",","."),
            "transaction" => $list_history
        ];
        return $data;
    }

    public function getdatatransfer($id){
        
        $received_history = Transfer::where('from_id', $id)->get();
        return $received_history;
    }

    public function getdatatransactions($id){
        
        $received_history = Transactions::where('payable_id', $id)->get();
        return $received_history;
    }

    public function PostDeposit(Request $request) {
        try {

            $User = auth('api')->user(); 

            $validator = Validator::make($request->all(), [
                'input_deposit' => 'required|numeric'
            ]); 

            if ($validator->fails()){ 

                return response()->json([
                    'success' => false,
                    'message' => $validator->errors()
                ]);

            } else {
                $User->deposit($request->input_deposit); 
                return $this->sendSuccess($this->getUser(), 'SUCCESS DEPOSIT', 200);
            }

            
            
        } catch(Exception $e){
            
            return $this->sendError('SERVER ERROR',  $e->getMessage(), 500);

        }
    }

    public function PostWithdraw(Request $request) {
        try {

            $User = auth('api')->user(); 

            $validator = Validator::make($request->all(), [
                'input_withdraw' => 'required|numeric'
            ]); 

            if ($validator->fails()){ 

                return response()->json([
                    'success' => false,
                    'message' => $validator->errors()
                ]);

            } else {
                $User->withdraw($request->input_withdraw); 
                return $this->sendSuccess($this->getUser(), 'SUCCESS WITHDRAW', 200);
            }

            
            
        } catch(Exception $e){
            
            return $this->sendError('SERVER ERROR',  $e->getMessage(), 500);

        }
    }
    
    public function PostTransfer(Request $request) {

        try {

            $checkUsername = User::where('username', $request->input_username)->first();

            if($checkUsername) {
                
                $User = auth('api')->user(); 

                $validator = Validator::make($request->all(), [
                    'input_value_transfer' => 'required|numeric',
                    'input_username' => 'required|string'
                ]); 
                
                if ($validator->fails()){ 

                    return response()->json([
                        'success' => false,
                        'message' => $validator->errors()
                    ]);

                } else {
                    
                    $transferTo = User::where('username', $request->input_username)->first();

                    if($User->getKey() !== $transferTo->getKey()){
                        
                        $User->transfer($transferTo, $request->input_value_transfer);

                        return $this->sendSuccess("", 'SUCCESS TRANSFER TO '. $request->input_username , 200);
                    } else {
                        return "false";
                    }
                    
                }
                
            } else {
                return $this->sendError("Falied Transfer", 'Username '. $request->input_username . ' tidak di temukan', 200);
            }

            
            
            
        } catch(Exception $e){
            
            return $this->sendError('SERVER ERROR',  $e->getMessage(), 500);

        }
    }

    public function getListTransfers() {
        
        try {

            $User = auth('api')->user(); 
            $listTransfers = $this->getdatatransfer($this->getUser()['wallet_id']);
            $listTransactions = $this->getdatatransactions($User->id);
            $data = [
                "list_transfer" => $listTransfers,
                "list_transactions" => $listTransactions,
            ];
            return $this->sendSuccess($data, 'SUCCESS GET LIST TRANSACTIONS' , 200);
            
            
        } catch(Exception $e){
            
            return $this->sendError('SERVER ERROR',  $e->getMessage(), 500);

        }
    }
}
