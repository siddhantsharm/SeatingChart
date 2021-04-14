<?php
//user-info.php - Endpoint to get user details corresponding to the jwt token.

//Headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

//Auth.php - The institutional API is called in this file
require __DIR__.'/middlewares/Auth.php';
require __DIR__.'/APIcall.php';
//Get all the data
$allHeaders = getallheaders();

//Call the Auth middleware
$auth = new Auth($conn,$allHeaders);

//Default data
$returnData = [
    "success" => 0,
    "status" => 401,
    "message" => "Unauthorized"
];
//If auth is succesful update default data with user info.
if($auth->isAuth()){
    $returnData = $auth->isAuth();
}
$get_data = callAPI('GET', 'https://604891fcb801a40017cce05b.mockapi.io/api/classMetaData', false);
$data = json_decode($get_data, true);
$classData = [];
$paths = [];

 for($i = 0; $i < count($data); $i++) {
    if(in_array($data[$i]["name"], $returnData["user"]["classes"])) {
        array_push($classData, $data[$i]);
        $paths[$data[$i]["link"]] = $data[$i];
    }
} 

$returnData["user"]["classMetaData"] = $classData;
$returnData["user"]["paths"] = $paths;
//Return user data to the front end. 
echo json_encode($returnData);


 

