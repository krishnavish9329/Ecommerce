import React, {useEffect}from "react";
import Layout from "./../components/Layout/Layout";
import { useAuth } from "../context/Auth"
const HomePage = () => {
  const [auth,setauth] = useAuth()
  console.log(auth+"-- homePage__")

  useEffect(()=>{
          const data = localStorage.getItem('auth')
          if(data)
          {
              const parseData = JSON.parse(data)
              setauth({
                  ...auth,
                  user:parseData.user,
                  token:parseData.token
              })
          }
      },[])

  return (
    <Layout title={`Best Offer - Ecommerce App`}>
      <h1>HomePage</h1>
      <pre>{JSON.stringify(auth,null,4)}</pre>
    </Layout>
  );
};

export default HomePage;
