<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

function debugToConsole($msg)
{
    echo "<script>console.log(" . json_encode($msg) . ")</script>";
}
//Method to built return message.
function msg($success, $status, $message, $extra = [])
{
    return array_merge([
        'success' => $success,
        'status' => $status,
        'message' => $message
    ], $extra);
}

//Import APIcall method.
require __DIR__ . '/APIcall.php';

//decode input data.
$data = json_decode(file_get_contents("php://input"));
$returnData = [];

// IF REQUEST METHOD IS NOT EQUAL TO POST
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    $returnData = msg(0, 404, 'Endpoint only accepts GET Requests not ' . $_SERVER["REQUEST_METHOD"] . ' Requests');
}
// CHECKING EMPTY FIELDS
elseif (
    !isset($data->className)
    || empty(trim($data->className))
) {

    $fields = ['fields' => ['className']];
    $returnData = msg(0, 422, 'Please specify the classname you wish to fetch');
}
// IF THERE ARE NO EMPTY FIELDS THEN-
else {
    $className = trim($data->className);
    $get_data = callAPI('GET', 'https://604891fcb801a40017cce05b.mockapi.io/api/' . $className, false);
    $response = json_decode($get_data, true);
    $returnData = [
        'success' => 1,
        'message' => 'Seat request succesful.',
        'Seats' => $response
    ];
    if ($returnData["Seats"] == "Not found") {
        $returnData = [
            'success' => 0,
            'message' => 'Class does not exist'
        ];
    }
}






echo json_encode($returnData);
