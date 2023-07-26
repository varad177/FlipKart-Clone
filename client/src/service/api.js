import axios from "axios";

const url = ''

export const authentiCateSignUp = async (data) => {
    try {
       return await axios.post(`${url}/signup` , data)
    } catch (error) {
        console.log("error while calling the Signup api", error.message);
    }

}

 export const authentiCateLogin = async (data) => {
     try {
        return await axios.post(`${url}/login` , data)
     } catch (error) {
         console.log("error while calling the Login api", error.message);
         return error.response;
     }
 }
