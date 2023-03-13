import { createContext } from "react";


const AuthContext = createContext({
    auth: undefined,
    loging: () => null,
    logout: () => null,
});



export default AuthContext;
