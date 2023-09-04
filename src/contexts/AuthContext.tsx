import { createContext,useState, useEffect } from "react";
import Cookis from "js-cookie";
import { getMe } from "../api/httpApi";
import  IUser  from "../interface/IUser";


const AuthContext = createContext<any>(null);

const AuthProvider = ({ children } : {children : any}) => {
    const [user, setUser] = useState<IUser>()
    const [token, setToken] = useState<string>(Cookis.get("token") || "")

    const saveLogin = (token : string, user : IUser) => {
        setToken(token)
        setUser(user)
        Cookis.set("token", token)
    }

    const logout = () => {
        setToken("")
        setUser(undefined)
        Cookis.remove("token")
    }

    useEffect(() : void =>{
        if(token){
            try {
                const res  = getMe(token)
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        }
        
    }, [token])

    return (
        <AuthContext.Provider value={{user, setUser, token, logout, saveLogin}} >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }