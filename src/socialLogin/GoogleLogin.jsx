import { FcGoogle } from "react-icons/fc";

import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const GoogleLogin = () => {
  const {googleLogin}=useAuth()
  const axiosHook = useAxiosSecure()
  const navigate = useNavigate()
  const location= useLocation()
  const path = location.state || '/';

  const handleGoogleLogin = ()=>{
    googleLogin()
    .then(res=>{
      // console.log(res.user);
      const userData = {
        name:res?.user?.displayName,
        email:res?.user?.email,
        photo:res?.user?.photoURL,
        status:"user"
      }
      axiosCommon.post("/users",userData)
      .then(res=>{
        // console.log(res.data);
        navigate(path)
      })
    })
    .catch(err=>{
      console.log(err.user);      
    })
  }
  return (
    <div className=" flex justify-center">
      <button onClick={handleGoogleLogin} className="btn btn-outline btn-success btn-md flex justify-center items-center ">
          <FcGoogle></FcGoogle>
          Continue With Google
      </button>
    </div>
  );
};

export default GoogleLogin;
