import { FcGoogle } from "react-icons/fc";

import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import swal from "sweetalert";

const GoogleLogin = () => {
  const {signInWithGoogle}=useAuth()
  const axiosHookCommon = useAxios()
  const navigate = useNavigate()
  const location= useLocation()
  const path = location.state || '/';

  const handleGoogleLogin = ()=>{
    signInWithGoogle()
    .then(res=>{
      console.log(res.user);
      const userData = {
        name:res?.user?.displayName,
        email:res?.user?.email,
        photo:res?.user?.photoURL,
        status:"user"
      }
      axiosHookCommon.post("/users",userData)
      .then(res=>{
        console.log(res.data);
        swal('Logged in',{icon:'success'})
        navigate(path)
      })
    })
    .catch(err=>{
      swal('something went wrong please try again ',{icon:"error"})     
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
