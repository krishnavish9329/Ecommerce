import React,{useState} from 'react'
import Layout from "./../../components/Layout/Layout";
import {toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate , useLocation} from 'react-router-dom';
import "../../styles/AuthStyles.css"
import { useAuth } from '../../context/Auth';

const Login = () => {
    const [Email,setEmail]= useState("");
    const [Password,setPassword ] = useState("");
    const [auth, setauth] = useState()
    const navigate = useNavigate();
    const Location = useLocation()

    const  handleSubmit = async (e)=>
        {
            e.preventDefault();
            console.log(Email ,  Password)
      
            // toast.success("successFull");
            try{
              const res = await axios.post(`http://localhost:4000/api/v1/auth/login`,
                {Email,Password});
      
              if(res && res.data.success)
              {
                toast.success(res.data.message);
                console.log("success")
                setauth({
                    ...auth,
                    user : res.data.user,
                    token : res.data.token
                })
                localStorage.setItem('auth', JSON.stringify(res.data))
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
            
            // setName("");
            // setEmail("");
            // setPassword("");
            // setPhone("");
            // setAddress("");
        }



  return (
    <Layout title="Login-Ecommerce App">
    
          <div className="form-container">
            <h1>Login Page</h1>
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
                type="password" 
                value={Password}
                onChange={(e)=>{setPassword(e.target.value)}}
                class="form-control" 
                id="exampleInputPassword1"
                placeholder='Enter the Password' 
                required
                />
              </div>

              <div className='mb-3'>        
                <button type="button" class="btn btn-primary" onClick={()=>{
                  navigate('/forgot-password')
                }}>
                  Forgot Passwoed
                </button>
              </div>
              
                <button type="submit" class="btn btn-primary">
                  LOGNI
                </button>
            </form>
          </div>
        </Layout>
  )
}

export default Login