import { createContext, useContext, useState } from "react";


const AuthContext = createContext(null);


export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(localStorage.getItem('id'))

    const login = (id, type, cred) => {
        setUser(id);
        localStorage.setItem('id', id);
        localStorage.setItem('type', type);
        if(type === 'student'){
            localStorage.setItem('grade', cred)
        }else{
            localStorage.setItem('subject', cred)
        }
    }

    const logout = () =>{
        setUser(null);
        localStorage.clear();
    } 

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>{
    return useContext(AuthContext);
}