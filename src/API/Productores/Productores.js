import axios from "axios"
import { PRODUCTORES_LIST } from "../../Constants/Constants"



export const Productores_Call = async () =>{
    const response = await axios.get(PRODUCTORES_LIST)

    console.log(response)

    return response.data
}