import {endpoint_list_products} from "../urlsAPI/ProductUrls.js";
import axios from "axios";

export const listProducts = (setData) => {
    axios.get(endpoint_list_products)
        .then((response)=>{
            console.log(response.data)
            setData(response.data)
        })
        .catch((error)=>{
            console.log(error.response)
        })
}