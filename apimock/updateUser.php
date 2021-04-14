<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

function msg($success,$status,$message,$extra = []){
    return array_merge([
        'success' => $success,
        'status' => $status,
        'message' => $message
    ],$extra);
}
//Import APIcall method.
require __DIR__.'/APIcall.php';


// GET DATA FORM REQUEST
$data = json_decode(file_get_contents("php://input"));
$returnData = [];

// IF REQUEST METHOD IS NOT POST
if($_SERVER["REQUEST_METHOD"] != "POST"):
    $returnData = msg(0,404,'Page Not Found!');

// CHECKING EMPTY FIELDS
elseif(!isset($data->firstname)
    || !isset($data->lastname)
    || !isset($data->pronouns)
    || !isset($data->username)
    || !isset($data->password)
    || !isset($data->currUser)
    || empty(trim($data->firstname))
    || empty(trim($data->lastname))
    || empty(trim($data->pronouns))
    || empty(trim($data->username))
    || empty(trim($data->password))
    || empty(trim($data->currUser))
    ):
endif;
    $fields = ['fields' => ['firstname','username','password']];
    $returnData = msg(0,422,'Please Fill in all Required Fields!',$fields);

// IF THERE ARE NO EMPTY FIELDS THEN-

    $currUser = trim($data -> currUser); //is this right?
    $firstname = trim($data->firstname);
    $lastname = trim($data->lastname);
    $pronouns = trim($data->pronouns);
    $username = trim($data->username);
    $password = trim($data->password);

    $data_array =  array(
          "firstName" => $firstname,
          "lastName" => $lastname,
          "pronouns" => $pronouns,
          "username" => $username,
          "password" => $password
    );



    if(strlen($password) < 8):
        $returnData = msg(0,422,'Your password must be at least 8 characters long!');

    elseif(strlen($firstname) < 3):
        $returnData = msg(0,422,'Your name must be at least 3 characters long!');


    else:

      //Send put request to API.
      $get_data = callAPI('PUT', 'https://604891fcb801a40017cce05b.mockapi.io/api/StudentData/'.$users[$currUser] , json_encode($data_array));
      if($get_data) {
        $returnData = msg(0,201,'Your details have been updated');
      }

    endif;



echo json_encode($data_array);
