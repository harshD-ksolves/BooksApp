import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate,Outlet } from 'react-router-dom';

const AdminRoute = () => {
    const user=useSelector((state)=>state.user);
    const auth=user.token;
    const admin=user.user?.isAdmin;
  return (

    !user? <Navigate to="/"/> : !auth ? <Navigate to="/"/> : !admin ?<Navigate to="/"/>:<Outlet/>
    
    );
  
}

export default AdminRoute;