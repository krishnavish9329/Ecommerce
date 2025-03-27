import React,{useState} from 'react'
import Layout from "./../../components/Layout/Layout";

import {toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../../styles/AuthStyles.css"

const Register = () => {

  const [Name,setName]= useState("");
  const [Email,setEmail]= useState("");
  const [Password,setPassword]= useState("");
  const [Phone,setPhone]= useState("");
  const [Address,setAddress]= useState("");
  const [Answer,setAnswer]= useState("");
  const navigate = useNavigate();

  const  handleSubmit = async (e)=>
  {
      e.preventDefault();
      console.log( Name ,  Email ,  Password , Phone , Address,Answer)
      // console.log(process.env.REACT_APP_API)
      try{
        const res = await axios.post(`http://localhost:4000/api/v1/auth/register`,
          {Name,Email,Password,Phone,Address,Answer});

        if(res.data.success)
        {
          toast.success(res.data.message);
          navigate('/login');
        }
        else
        {
          toast.error(res.data.message);
        }
      }
      catch (error)
      {
          console.log(error)
          toast.error("SomeThing went wrong register")
      }
      
      // setName("");
      // setEmail("");
      // setPassword("");
      // setPhone("");
      // setAddress("");
  }
  return (
    <Layout title="Register-Ecommerce App">

      <div className="form-container">
        <h1>Register Page</h1>
        <form onSubmit={handleSubmit}>
        <div class="mb-3">
            <input 
            type="text" 
            value={Name}
            onChange={(e)=>{setName(e.target.value)}}
            class="form-control " 
            id="exampleInputEmail1"
            placeholder='Enter the Name'
            required
             />
          </div>
          <div class="mb-3">

            <input 
            type="email" 
            value={Email}
            onChange={(e)=>{setEmail(e.target.value)}}
            class="form-control" 
            id="exampleInputEmail1"
            placeholder='Enter the Email'
            required
             />
          </div>
          <div class="mb-3">

            <input 
            type="password" 
            value={Password}
            onChange={(e)=>{setPassword(e.target.value)}}
            class="form-control" 
            id="exampleInputPassword1"
            placeholder='Enter the Password' 
            required
            />
          </div>
          <div class="mb-3">

            <input 
            type="number" 
            value={Phone}
            onChange={(e)=>{setPhone(e.target.value)}}
            class="form-control" 
            id="exampleInputPassword1" 
             placeholder='Enter the Phone'
             required
            />
          </div>
          <div class="mb-3">

            <input 
            type="text" 
            value={Address}
            onChange={(e)=>{setAddress(e.target.value)}}
            class="form-control" 
            id="exampleInputPassword1" 
            placeholder='Enter the Address'
            required
            />
          </div>

          <div class="mb-3">

            <input 
            type="text" 
            value={Answer}
            onChange={(e)=>{setAnswer(e.target.value)}}
            class="form-control" 
            id="exampleInputPassword1" 
            placeholder='What is Your Favorite sports'
            required
            />
          </div>

          
          
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </Layout>
  )
}

export default Register