<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

function debugToConsole($msg) {
        echo "<script>console.log(".json_encode($msg).")</script>";
}
//Method to built return message.
function msg($success,$status,$message,$extra = []){
    return array_merge([
        'success' => $success,
        'status' => $status,
        'message' => $message
    ],$extra);
}

//Import APIcall method.
require __DIR__.'/APIcall.php';
//Import JwtHandler to encode data.
require __DIR__.'/classes/JwtHandler.php';

//decode input data.
$data = json_decode(file_get_contents("php://input"));
$returnData = [];
/*
// IF REQUEST METHOD IS NOT EQUAL TO POST
if($_SERVER["REQUEST_METHOD"] != "POST"):
    $returnData = msg(0,404,'Page Not Found!'); */
/*
// CHECKING EMPTY FIELDS
elseif(!isset($data->username)
    || !isset($data->password)
    || empty(trim($data->username))
    || empty(trim($data->password))
    ):

    $fields = ['fields' => ['username','password']];
    $returnData = msg(0,422,'Please Fill in all Required Fields!',$fields);

// IF THERE ARE NO EMPTY FIELDS THEN-
else:
    $username = trim($data->username);
    $password = trim($data->password);

    

    // IF PASSWORD IS LESS THAN 8 THE SHOW THE ERROR
    if(strlen($password) < 8):
        $returnData = msg(0,422,'Your password must be at least 8 characters long!');

    // THE USER IS ABLE TO PERFORM THE LOGIN ACTION
    else:
      */
      $studentData = $data->studentData;
      $studentData = json_decode(json_encode($studentData), true);
  
      for($i = 0; $i < count($studentData); $i++) {
        $data_array =  array(
          "occupied" => $studentData[$i]["occupied"],
          "x" =>  $studentData[$i]["seatId"][0],
          "y" => $studentData[$i]["seatId"][1],
          "occupiedBy" => $studentData[$i]["name"],
          "seatNumber" => $i
          
      ); 
      $get_data = callAPI('PUT', 'https://604891fcb801a40017cce05b.mockapi.io/api/BerkeleyLaw/'.$i , json_encode($data_array));
      
    }
    echo json_encode($studentData);
       
          /* if(array_key_exists($username, $users)):
            $get_data = callAPI('GET', 'https://604891fcb801a40017cce05b.mockapi.io/api/StudentData/'.$users[$username], false);
            $response = json_decode($get_data, true);
            $check_password = $password == $response['password'];

            if($check_password):
              $jwt = new JwtHandler();
              $token = $jwt->_jwt_encode_data(
                  'http://localhost/apimock/',
                  array("user_id"=> $response['id'])
                );

                $returnData = [
                  'success' => 1,
                  'message' => 'You have succesfully logged in.',
                  'token' => $token
                ];
            else:
                $returnData = msg($response['password'],$password,'Invalid Password!');
            endif;
          else:
            $returnData = msg(0,422,'Invalid username Address!');
          endif;


*/
    //endif; 
    

//endif; 

//echo json_encode($returnData);
//echo json_encode($data); 
