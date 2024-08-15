import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import swal from 'sweetalert'


const Navbar = () => {
  // get user 
  const {user,logOut} = useAuth()
  // navlinks 
  const navLinks =<>
  <li className=" text-sm font-bold px-0 lg:px-3"><NavLink to={'/'}>Home</NavLink></li>
  <li className=" text-sm font-bold px-0 lg:px-3"><NavLink to={'/all-items'}>All Items</NavLink></li>

  </>


const handleLogout=()=>{
  swal({
    title: "Are you sure?",
    text: "You want to logout!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      logOut()
      swal("logged out successfully", {
        icon: "success",
      });
    } else {
      console.log('hello');
    }
  });
}
  return (
    <div className=" bg-base-300">
    <div className="navbar w-[93%]  lg:w-[85%] mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-primary-light font-bold text-lg">Product Hub</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    {user?<div className=" flex gap-6">
      <div className="avatar online">
  <div className="w-10 rounded-full">
    <img src={user?.photoURL} />
  </div>
</div>

  <button onClick={handleLogout} className=" btn-primary">Logout</button>

    </div>:<button className=" btn-primary ">Login</button>}
  </div>
</div></div>
  );
};

export default Navbar;