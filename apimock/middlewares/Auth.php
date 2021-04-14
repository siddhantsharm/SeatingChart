<?php
require __DIR__.'/../classes/JwtHandler.php';
class Auth extends JwtHandler{

    //headers containing data to be processed.
    protected $headers;
    //token - jwt token used as key for users.
    protected $token;
    public function __construct($db,$headers) {
        parent::__construct();
        $this->db = $db;
        $this->headers = $headers;
      }
    //Method to decode the jwt token and fetch the appropriate user.
    public function isAuth(){
        if(array_key_exists('Authorization',$this->headers) && !empty(trim($this->headers['Authorization']))):
            $this->token = explode(" ", trim($this->headers['Authorization']));
            if(isset($this->token[1]) && !empty(trim($this->token[1]))):

                $data = $this->_jwt_decode_data($this->token[1]);

                if(isset($data['auth']) && isset($data['data']->user_id) && $data['auth']):
                    $user = $this->fetchUser('GET', 'https://604891fcb801a40017cce05b.mockapi.io/api/StudentData/'.$data['data']->user_id, false, $data['data']->user_id);
                    return $user;

                else:
                    return null;

                endif; // End of isset($this->token[1]) && !empty(trim($this->token[1]))

            else:
                return null;

            endif;// End of isset($this->token[1]) && !empty(trim($this->token[1]))

        else:
            return null;

        endif;
    }


    //Helper Method to fetchUser from instituional API.
     public function fetchUser($method, $url, $data, $user_id){
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
       $get_data = curl_exec($curl);
       if(!$get_data){die("Connection Failure");}
       curl_close($curl);
      $response = json_decode($get_data, true);
      if($response['id'] == $user_id) {
        return [
          'success' => 1,
          'status' => 200,
          'user' => $response
        ];
      } else {
        return null;
      }

      }



    }
