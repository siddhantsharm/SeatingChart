<?php
//APIcall.php - Function to call the instiduational API with several different methods(GET, POST etc).

//Fill in this data array with the information you want to store in the instituional database. 
$data_array =  array(
    "firstName" => "Mark",
    "lastName" => "Christ",
    "pronouns" => "She",
    "username" => "Caril_Christ",
    "password" =>  "Password"
);

//callAPI function. $method = type of request. $url = url of API. $data = data to be sent in teh case of POST/PUT request.  
function callAPI($method, $url, $data){
   $curl = curl_init();
   switch ($method){
      case "POST":
         curl_setopt($curl, CURLOPT_POST, 1);
         if ($data)
            curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
         break;
      case "PUT":
         curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
         if ($data)
            curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
         break;
      default:
         if ($data)
            $url = sprintf("%s?%s", $url, http_build_query($data));
   }
   // OPTIONS:
   curl_setopt($curl, CURLOPT_URL, $url);
   curl_setopt($curl, CURLOPT_HTTPHEADER, array(
      'APIKEY: 111111111111111111111',
      'Content-Type: application/json',
   ));
   curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
   curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
   // EXECUTE:
   $result = curl_exec($curl);
   if(!$result){die("Connection Failure");}
   curl_close($curl);
   return $result;
}

//Call and return the response from the API. Make sure to use json_encode() for the $data_array. You may treat the callAPI method
// as a black box.
   $result = callAPI("POST", "https://604891fcb801a40017cce05b.mockapi.io/api/StudentData/", json_encode($data_array));

   echo $result;
 ?>