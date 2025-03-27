import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminMenu = () => {
    return (
        <>
        <div className="text-center">
            <div className="list-group">
                <h1>Admin panel</h1>
                {/* <NavLink to="/dashboard/admin" className="list-group-item list-group-item-action active" aria-current="true">
                    Admin panel
                </NavLink> */}
                <NavLink to="/dashboard/admin/create-category" className="list-group-item list-group-item-action">Creat Category</NavLink>
                <NavLink to="/dashboard/admin/create-Product" className="list-group-item list-group-item-action">Creat Product</NavLink>
                <NavLink to="/dashboard/admin/Users" className="list-group-item list-group-item-action">Users</NavLink>

            </div>
        </div>
        </>
    )
    Name
}

export default AdminMenu