import React,{useState} from 'react'
import Layout from "./../../components/Layout/Layout";
import {toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate , useLocation} from 'react-router-dom';
import "../../styles/AuthStyles.css"

const ForgotPassword = () => {

    const [Email,setEmail]= useState("");
    const [NewPassword,setNewPassword ] = useState("");
    const [Answer,setAnswer] = useState("");
    const navigate = useNavigate();
    const Location = useLocation()

    const  handleSubmit = async (e)=>
        {
            e.preventDefault();
            console.log(Email ,  NewPassword)
            try{
              const res = await axios.post(`http://localhost:4000/api/v1/auth/forget-passsword`,
                {Email,
                  NewPassword,
                  Answer
                });
                console.log("hello")
              if(res && res.data.success)
              {
                toast.success(res.data.message);
                
                navigate(Location.state ||'/');
              }
              else
              {
                toast.error(res.data.message);
              }
            }
            catch (error)
            {
                console.log(error)
                toast.error("SomeThing went wrong --")
            }
        }

  return (
    <Layout title={'Forgot Password - Ecommerse App'}>

        <div className="form-container">
            <h1>Reset Password</h1>
            <form onSubmit={handleSubmit}>
            
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
                type="text" 
                value={Answer}
                onChange={(e)=>{setAnswer(e.target.value)}}
                class="form-control" 
                id="exampleInputEmail1"
                placeholder='Enter your Favorite soprt Name'
                required
                 />
              </div>

              <div class="mb-3">

                <input 
                type="password" 
                value={NewPassword}
                onChange={(e)=>{setNewPassword(e.target.value)}}
                class="form-control" 
                id="exampleInputPassword1"
                placeholder='Enter the Password' 
                required
                />
              </div>             
                <button type="submit" class="btn btn-primary">
                  RESET
                </button>
            </form>
        </div>
    </Layout>
  )
}

export default ForgotPassword