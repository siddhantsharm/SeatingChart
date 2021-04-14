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
elseif(!isset($data->occupied)
    || !isset($data->occupiedBy)
    || !isset($data->seatNum)
    || !isset($data->course)
    || empty(trim($data->occupied))
    || empty(trim($data->occupiedBy))
    || empty(trim($data->seatNum))
    || empty(trim($data->course))
    ):
endif;
    $fields = ['fields' => ['occupied','occupiedBy', 'seatNum']];
    $returnData = msg(0,422,'Please Fill in all Required Fields!',$fields);

// IF THERE ARE NO EMPTY FIELDS THEN-

    $occupied = $data -> occupied; 
    $occupiedBy = trim($data->occupiedBy);
    $seatNum = trim($data->seatNum);
    $course = trim($data->course);
    

    $data_array =  array(
          "occupied" => $occupied,
          "occupiedBy" => $occupiedBy,
    );



    


    

      //Send put request to API.
      $get_data = callAPI('PUT', 'https://604891fcb801a40017cce05b.mockapi.io/api/'.$course.'/'.$seatNum , json_encode($data_array));
      if($get_data) {
        $returnData = msg(0,201,'Your details have been updated');
      }

    



echo json_encode($get_data);