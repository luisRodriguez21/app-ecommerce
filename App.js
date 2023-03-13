import React, {useState, useEffect, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import AuthScreen from './src/screens/Auth';
import AuthContext from './src/context/AuthContext';
import { setTokenUser, getTokenUser, removeTokenUser } from './src/api/token';
import AppNavigation from './src/navigation/AppNavigation';

export default function App() {
    const [auth, setAuth] = useState(undefined);  


    useEffect(() => {
        (async () => {
            const token = await getTokenUser();
            console.log("..................");
            console.log("token: ",token);

            if (token) {
                console.log("ESTOY LOGUEADO");                
                setAuth({ token: token });
            } else {
                setAuth(null);
            }

        })();
    }, []);


    const login = (user) => {
        console.log("login app");
        console.log("user: ",user);
        
        setTokenUser(user.data.jwt);
        setAuth({ token: user.data.jwt });
    }


    const logout = () => {
        console.log("logout");
        if (auth) {
            removeTokenUser();
            setAuth(null);
        }
    }


    const authData = useMemo(
        () => ({
            auth,
            login,
            logout,
        }),
        [auth]
    );

    if(auth === undefined){
        return null;
    }


   


    return (
        <AuthContext.Provider value={authData}>
            <PaperProvider>
                {   
                    auth ?                    
                    <AppNavigation />  
                    :
                    <AuthScreen />
                }

            </PaperProvider>
        </AuthContext.Provider>
    );
}

