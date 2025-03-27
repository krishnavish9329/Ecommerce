import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import { useAuth } from '../../context/Auth'


const AdminDashbord = () => {
  const [auth,setauth] = useAuth()
  return (
    <Layout title={"Admin DashBoard - Ecommerce App"}>
    <div>
        <div className="container-fluid m-3 p-3">
          <div className="row">
            <div className="col-md-3">
              <AdminMenu />
            </div>
            <div className="col-md-9">
              <div className="card w-75 p-3">
                <h3>Admin Name :{auth?.user?.Name}</h3>
                <h3>Admin Email :{auth?.user?.Email}</h3>
                <h3>Admin Phone :{auth?.user?.Phone}</h3>
                <h3>Admin Address :{auth?.user?.Address}</h3>
                <h3>Admin role :{auth?.user?.role === 1 ? "ADMIN":"USER"}</h3>
              </div>
            </div>
          </div>
        </div>
    </div>
    </Layout>
  )
}

export default AdminDashbord