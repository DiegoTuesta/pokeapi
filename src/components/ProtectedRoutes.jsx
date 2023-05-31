import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
 
    const user = useSelector(state => state.user)
    if (user.length > 2) {
        return <Outlet />
    }else{
        return <Navigate to='/' />
    }

}

export default ProtectedRoutes