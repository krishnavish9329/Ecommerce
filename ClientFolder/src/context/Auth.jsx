import axios from 'axios';
import React, {useState, useEffect, useContext, createContext} from 'react'
const AuthContext = createContext();
const AuthProvider =({children })=>
{
    const [auth,setauth]=useState({
        user:null,
        token:""
    })

    axios.defaults.headers.common['Authorization'] = auth?.token

    useEffect(()=>{
        const data = localStorage.getItem('auth')
        if(data)
        {
            const parseData = JSON.parse(data)
            console.log(data);
            setauth({
                ...auth,
                user:parseData.user,
                token:parseData.token
            })
            console.log(auth+" useEffect form golal state")
        }
    },[])
    
    return(
        <AuthContext.Provider value={[auth,setauth]}>
            {children }
        </AuthContext.Provider>
    )
}
// custom hook
const useAuth =()=> {
    return useContext(AuthContext); 
} 
export { useAuth, AuthProvider }