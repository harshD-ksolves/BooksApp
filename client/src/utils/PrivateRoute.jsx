import { useSelector } from "react-redux"
import { Outlet,Navigate } from "react-router-dom"

const PrivateRoute = () => {
    const auth=useSelector((state)=>state.user?.token);
  return (
    auth ? <Outlet/> : <Navigate to="/login"/>
  );
}

export default PrivateRoute