import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { updateProfile } from "firebase/auth";

import { AuthContext } from "../../authProvider/AuthProvider";
import usePostImage from "../../hooks/usePostImage";
import useAxios from "../../hooks/useAxios";
import react from 'react';

import swal from '@sweetalert/with-react'
 

const Register = () => {

  const {createUser ,updateUserProfile} = useContext(AuthContext)
  const [photo,setPhoto]=useState([])
  // import navigate hook 
  const navigate  = useNavigate()
  
  // get axis hook
  const axiosHookCommon = useAxios() 
  const imgUrl = usePostImage(photo)
  // console.log(imgUrl);
 const handleRegister=  (e)=>{
  e.preventDefault()

  const name = e.target.name.value
  const email = e.target.email.value
  const password = e.target.password.value

  // console.log(createUser);
  // console.log(name);

  createUser(email , password)
  .then(res=>{
    // console.log(res.user);
    updateUserProfile(name,imgUrl)
    const usersData ={
      email,
      name ,
      photo ,
      status:"user"
      
    }
    axiosHookCommon.post('/users',usersData)
    .then(res=>{
      console.log(res.data);
      if(res.data?.insertedId){
        swal(
          <div>
            <h1 className=" text-lg font-bold">Registered Successfully</h1>
            <p>
             Welcome to <span className=" text-primary-light">Product Hub</span>!
            </p>
          </div>
        )
        setTimeout(() => {
          navigate('/')
        }, 800);
      }
      if(res.data?.insertedId==null){
        swal(
          <div>
            <h1 className=" text-lg font-bold text-red-600">User already exist..</h1>
            <p>
            please login !            </p>
          </div>
        )
        setTimeout(() => {
          navigate('/login')
        }, 800);
      }
    })
    
    
    
  })
  .catch(err=>{
    console.log(err);
    if(err){
      swal(
        <div>
          <h1 className=" text-lg font-bold text-red-600">User already exist..</h1>
          <p>
          please login !            </p>
        </div>
      )
      
    }
 
  })

 
 }

  return (
    <div className="min-h-[calc(100vh-116px)] flex items-center  relative">
      {/* form div */}
      <div className={` shrink-0 w-full max-w-xl lg:p-10  shadow-2xl  mx-auto my-5  bg-base-300 bg-opacity-30`}>
      <h1 className=" text-xl my-3 text-center font-bold pt-3"> Register in <span className=" text-primary-light">Product Hub</span> web! !</h1>

    <form onSubmit={handleRegister} className="">

    <div className="form-control">
          <label className="label">
            <span className=" ">You&apos;re Full Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered bg-white text-black   focus:outline-sky-200"
            required
            name="name"
          />
        </div>


        <div className="form-control">
          <label className="label">
            <span className=" ">You&apos;re Photo </span>
          </label>
          <input
            type="file"
            required
            onChange={(e)=>setPhoto(e.target.files[0])}
          />
        </div>

      <div className="form-control">
        <label className="label">
          <span className=" ">Email</span>
        </label>
        <input
          type="email"
          placeholder="email"
          className="input input-bordered bg-white text-black   focus:outline-sky-200"
          required
          name="email"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className=" ">Password</span>
        </label>
        <input
          type="password"
          placeholder="password"
          className="input input-bordered bg-white text-black focus:outline-sky-200"
          required
          name="password"
        />
      
      </div>

        <button className="btn-primary mt-5 text-center flex justify-center w-36 mx-auto ">Register</button>
      
    </form>
    <p className=" text-center mb-2 mt-3 ">Already Have an Account ! <Link className=" font-bold hover:underline text-blue-700" to={"/login"}>Login</Link></p>
  </div>

  </div>
  );
};

export default Register;