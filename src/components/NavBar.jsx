import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const isUserSignedIn = !!localStorage.getItem("token")
  const navigate = useNavigate();

  const handleSignOut =()=>{
    localStorage.removeItem('token');
    navigate("/login")
  }
  return (
        <nav className="lg:px-16 px-6 bg-[#0C1D42] shadow-md flex flex-wrap items-center lg:py-0 py-2">
          <div className="flex-1 flex justify-between items-center">
            <Link to="/" className="flex text-lg font-semibold">
              <img
                src="../src/assets/logo.png"
                width="50"
                height="50"
                className="p-2"
                alt="Collins Nixon Tech Logo"
              />
              <div className='mt-3  text-white text-xl font-sans "Helvetica Neue" italic'>MchapakaziTodo</div>
            </Link>
          </div>
          <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />
          <div
            className="hidden lg:flex lg:items-center lg:w-auto w-full"
            id="menu"
          >
            <nav>
              <ul className="text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex  lg:pt-0">
                {isUserSignedIn ? (
                  <>
                   <li className="py-2 lg:py-0 ">
                  <Link
                    className="text-white hover:pb-4 hover:border-b-4 hover:border-white"
                    to="/login"
                  >
                    Account
                  </Link>
                </li>
                {/* <li className="py-2 lg:py-0 ">
                  <Link
                    className="text-white hover:pb-4 hover:border-b-4 hover:border-white"
                    to="/createTodo"
                  >
                    CreateTodo
                  </Link>
                </li> */}
                <li className="py-2 lg:py-0 ">
                  <Link onClick={handleSignOut}
                    className="bg-red-600 rounded-md text-white text-center px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-600"
                    to="/login"
                  >
                    Signout
                  </Link>
                </li>
                  </>
                ):(<>
                <li className="py-2 lg:py-0 ">
                  <Link
                    className="text-white hover:pb-4 hover:border-b-4 hover:border-white"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li className="py-2 lg:py-0 ">
                  <Link
                    className="text-white hover:pb-4 hover:border-b-4 hover:border-white"
                    to="/signup"
                  >
                    Sign up
                  </Link>
                </li>
                </>)}
                
              </ul>
            </nav>
          </div>
        </nav>
  );
}

export default NavBar;
