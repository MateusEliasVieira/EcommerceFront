import axios, {HttpStatusCode} from "axios";
import {endpoint_user_save} from "../urlsAPI/UserUrls.js";

export const requestUserSave = async (data) => {
    await axios.post(endpoint_user_save, data, {headers: {"Content-Type": "application/json"}})
        .then((response) => {
            if (response.status === HttpStatusCode.Created) {
                console.log(response.data)
                return true
            }
            return false
        })
        .catch((error) => {
            console.log(error.response.data)
            return false
        })
}