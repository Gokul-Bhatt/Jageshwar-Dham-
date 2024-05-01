

import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({children})=>{
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");


     const authorizationToken = `Bearer ${token}`;
    
    const storetokenInLS=(serverToken)=>{
        setToken(serverToken);
        return localStorage.setItem('token',serverToken);
    }
    let isLoggedIn = !!token;           
    console.log("isLoggedIN", isLoggedIn);



    const userAuthentication = async ()=>{
        try {
            const response = await fetch("http://localhost:3000/home/user",{
                method:"GET",
                headers:{
                    Authorization: authorizationToken,
                },
            });
                if(response.ok){
                    const data = await response.json();
                    setUser(data.userData);
                }
        } catch (error) {
            console.log(error)
        }
        
    }



    return (<AuthContext.Provider value={{storetokenInLS,authorizationToken,user}}>
                {children}
    </AuthContext.Provider>
    );
};
export const useAuth =()=>{
    const AuthContextValue = useContext(AuthContext);
    if(!AuthContextValue){
        throw new Error("useAuth used outside of the provider");
    }
    return AuthContextValue;
   
};


