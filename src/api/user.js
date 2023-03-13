import { API_URL } from "../utils/constans";




export async function registerApi(formData){

    try {

        const params = {
            method: 'POST',            
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost', 'Token': 'UAPtC58aBSDnywe'},
            body: JSON.stringify(formData)
        }

        const response = await fetch(`${API_URL}a/save/user/${Date.now()}`, params);
        const result = await response.json();

        console.log("result: ",result);

        return result;        
    } catch (error) {
        console.log("error: ",error);
        return null;
    }
}


export async function LoginApi(formData){

    try {

        const params = {
            method: 'POST',            
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost', 'Token': 'UAPtC58aBSDnywe'},
            body: JSON.stringify(formData)
        }

        const response = await fetch(`${API_URL}action/login/${Date.now()}`, params);
        const result = await response.json();

        console.log("result: ",result);

        return result;        
    } catch (error) {
        console.log("error: ",error);
        return null;
    }
}
