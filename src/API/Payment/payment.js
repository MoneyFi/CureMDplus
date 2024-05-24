import axios from "axios"
import { GO_PAY } from "../../Constants/Constants";

export const goCuotas = async ({amount_in_cents, order_reference_id,phone_number})=>{
    
const formData = new FormData();
formData.append('amount_in_cents', parseInt(amount_in_cents))
formData.append('order_reference_id', order_reference_id)
formData.append('phone_number', phone_number)
formData.append('curemd', 'curemd_plus')

try{
    const response = await axios.post(GO_PAY,formData,{
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    if(!response.data.errors){
        window.open(response.data.url_init);
    }else{
        console.log(response.data.errors)
    }
    return response.data
}catch(error){
    console.log(error)
}

}