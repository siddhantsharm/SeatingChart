import React, { createContext,Component } from "react";
import axios from 'axios'
export const MyContext = createContext();

// Define the base URL
const Axios = axios.create({
    baseURL: '', //Please fill base url (file path) of everything upto register.php file
});

class MyContextProvider extends Component{
    constructor(){
        super();
    }


    registerUser = async (user) => {

        // Sending the user registration request
        const register = await Axios.post('register.php',{
            name:user.name,
            email:user.email,
        });

        return register.data;
    }



    render(){
        const contextValue = {
            registerUser:this.registerUser,
        }
        return(
            <MyContext.Provider value={contextValue}>
                {this.props.children}
            </MyContext.Provider>
        )
    }

}

export default MyContextProvider;
