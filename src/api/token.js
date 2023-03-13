import AsyncStorage from "@react-native-async-storage/async-storage";
import { TOKEN } from "../utils/constans";


export async function setTokenUser(token){
    try {
        await AsyncStorage.setItem(TOKEN, token);
        return true;
    } catch (error) {
        return null;
    }
}

export async function getTokenUser(){
    try {
        const token = await AsyncStorage.getItem(TOKEN);
        return token;
    } catch (error) {
        return null;
    }
}

export async function removeTokenUser(){
    try {
        await AsyncStorage.removeItem(TOKEN);
        return true;
    } catch (error) {
        return null;
    }
}