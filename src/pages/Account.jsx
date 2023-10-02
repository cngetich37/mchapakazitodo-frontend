import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Account() {
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <div className="fixed flex flex-col top-18 left-0 w-50 hover:w-64 md:w-60 bg-gray-200 h-screen text-gray-600 transition-all duration-300 border-none z-10 sidebar">
        <div className="overflow-x-hidden overflow-y-hidden flex flex-col justify-between flex-grow">
          <ul className="flex flex-col py-6 space-y-0">
            <Link
              to="#"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-950 text-gray-600 hover:text-white border-l-4 border-transparent"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <i className="fas fa-home"></i>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Home</span>
            </Link>
            <Link>
              <Link
                to="/createTodo"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-950 text-gray-600 hover:text-white border-l-4 border-transparent"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <i className="fas fa-check-circle"></i>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  CreateTodo
                </span>
              </Link>
            </Link>
            <Link>
              <Link
                to="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-950 text-gray-600 hover:text-white border-l-4 border-transparent"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <i className="fas fa-users"></i>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Users
                </span>
              </Link>
            </Link>
            <Link
              to="#"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-950 text-gray-600 hover:text-white border-l-4 border-transparent"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <i className="fas fa-store"></i>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Todos</span>
            </Link>
            <Link
              to="#"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-950 text-gray-600 hover:text-white border-l-4 border-transparent"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <i className="fas fa-sign-out-alt"></i>
              </span>
              <span
                className="ml-2 text-sm tracking-wide truncate"
                onClick={handleSignOut}
              >
                Signout
              </span>
            </Link>
          </ul>
        </div>
      </div>
      <div className="bg-green-600 w-1/2">

      </div>
      <p className="mb-14 px-5 py-3 md:block text-center text-xs">
        Copyright @2023 Collins Nixon Tech
      </p>
    </>
  );
}

export default Account;
