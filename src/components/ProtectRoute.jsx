import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";



function ProtectRoute({children}) {
  const login=useSelector((state)=>state.login.isLoggedIn);
    if(!login)
        return <Navigate to="/login"/>
  {
    return children;
  }
    
  
}


export default ProtectRoute