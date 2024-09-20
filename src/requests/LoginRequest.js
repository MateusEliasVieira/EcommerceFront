import axios, {HttpStatusCode} from "axios";
import {endpoint_login} from "../urlsAPI/LoginUrls.js";

export const requestLogin = async (username, password) => {
    const data = {
        username: username,
        password: password
    }
    await axios.post(endpoint_login, data, {headers: {"Content-Type": "application/json"}})
        .then((response) => {
            if(response.status === HttpStatusCode.Accepted){
                localStorage.setItem("login",JSON.stringify(response.data))
                return true
            }
            return false
        })
        .catch((error) => {
            return false
        })
}