import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";
import GoogleLogin from "../../socialLogin/GoogleLogin";
import swal from "sweetalert";


const Login = () => {
  const { loginUser} = useContext(AuthContext);
  const location =useLocation()
  const navigate =useNavigate()


  const path = location.state || '/';
  // console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(email, password);

    loginUser(email, password)
      .then((res) => {
        swal('logged in ',{icon:"success"})
        navigate(path)
        // console.log(res.user)
        
      })
      .catch((err) => swal('something went wrong please try again ',{icon:"error"}));
  };
 



  return (
    <div className=" p-5 lg:p-0 min-h-screen">
      <title>Login | Product Hub</title>
      <div className={" w-[95%] lg:w-[90%] mx-auto my-10   flex flex-col-reverse lg:flex-row  items-center mt-3 lg:mt-20"}>
        <div className="card shrink-0 w-full lg:w-1/2 shadow-2xl  mx-auto bg-base-100 ">
          <h1 className=" text-xl text-center font-bold pt-3">
            {" "}
            Wanna Login in <span className=" text-primary-light">Product Hub</span> web!{" "}
          </h1>

          <div
            className=" flex justify-center mt-10
        "
          >
            <GoogleLogin></GoogleLogin>
          </div>
          <div className="divider">or</div>

          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="  ">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered text-black bg-white  focus:outline-sky-200"
                required
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered text-black bg-white focus:outline-sky-200"
                required
                name="password"
              />
          
            </div>

            <div className="form-control mt-6  mx-auto">
              <button className="btn-primary">
                Login
              </button>
            </div>
          </form>
          <p className=" text-center mb-2  ">
            New Here !{" "}
            <Link
              className=" font-bold hover:underline text-blue-700"
              to={"/register"}
            >
              Register
            </Link>
          </p>
        </div>
        <div>
          {/* <img src={loginImage} alt="" /> */}
        </div>
      </div>
      

    </div>
  );
};

export default Login;
