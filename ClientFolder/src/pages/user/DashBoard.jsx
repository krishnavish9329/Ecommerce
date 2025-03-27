import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import { useAuth } from '../../context/Auth'
const DashBoard = () => {
  const [auth]= useAuth()
  return (
    <Layout title={"DashBoard - Ecommerce App"}>
        <div className="container-flui m-3 p-3">
          <div className="row">
            <div className="col-md-3">
              <UserMenu />
            </div>
            <div className="col-md-9">
              <div className="card w-75 p-3">
              <h1>Your Profile</h1>
                <h3>User Name :{auth?.user?.Name}</h3>
                <h3>User Email :{auth?.user?.Email}</h3>
                <h3>User Phone :{auth?.user?.Phone}</h3>
                <h3>User Address :{auth?.user?.Address}</h3>
                <h3>User role :{auth?.user?.role === 1 ? "ADMIN":"USER"}</h3>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default DashBoard