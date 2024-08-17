import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

// eslint-disable-next-line react/prop-types
const PrivetRout = ({children}) => {
  const {user,loading}=useAuth()
  const location =useLocation()
if(loading)return <div className='flex justify-center items-center min-h-screen'>
<span className="loading loading-infinity loading-lg "></span>
</div>

  if(user)return children;

  return <Navigate state={location?.pathname} to={'/login'}></Navigate>
};

export default PrivetRout;