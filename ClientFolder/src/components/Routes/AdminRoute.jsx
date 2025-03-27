import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/Auth'
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../Spinner';

const AdminRoute = () => {
    // console.log("Hello i am adminRoue.jsx ")
    const [Ok,SetOk]= useState(false)
    const [auth,setauth]=useAuth();
    useEffect(()=>{
        const authCheck = async ()=>
        {
            const res = await axios.get('http://localhost:4000/api/v1/auth/admin-auth')
                // ,
                // {headers:{"Authorization": auth?.token}})
            console.log(res)
            console.log(res.data)
            console.log(res.data.ok)
            if(res.data.ok)
            {
                SetOk(true)
            }else{
                SetOk(false)
            }
            console.log(Ok)
        }
        console.log(auth.token+ "   admin private")
        if( auth?.token) authCheck()
            else
        console.log("auth have not admin token")
    },[auth?.token])
  return Ok? <Outlet /> : <Spinner path="" />
}

export default AdminRoute