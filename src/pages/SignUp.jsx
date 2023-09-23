import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [user, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get("http://localhost:5001/api/users/").then((res) => {
      console.log(res.data);
    });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5001/api/users/register", {
      email,
      username,
      password,
    })
    .then(()=>{
      alert("Registration successful")
      setEmail("")
      setUsername("")
      setPassword("")
      navigate("/login")
    })
    .catch((error)=>{
      alert("account already exists")
    })
  };
  return (
    <>
      <div className="bg-gray-500 h-screen w-screen flex items-center">
        <div className="h-max mx-auto flex flex-col items-center">
          <h1 className="text-3xl font-bold font-mono monospace decoration-wavy text-white text-center italic pb-4">
            Sign up to your account
          </h1>
          <form className="bg-white shadow-xl p-10 flex flex-col gap-2 text-sm" onSubmit={handleRegister}>
            <div>
              <label
                className="text-blue-900 font-bold font-mono monospace inline-block pb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="border border-blue-600 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
                type="text"
                name="username"
                placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label
                className="text-blue-900 font-bold font-mono monospace inline-block pb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="border border-blue-600 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
                type="email"
                name="email"
                placeholder="cnixontech@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                className="text-blue-900 font-mono monospace font-bold inline-block pb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="border border-blue-600 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
                type="password"
                name="password"
                placeholder="******" value={password} onChange={(e) =>setPassword(e.target.value)}
              />
            </div>
            <div className="flex">
              <div className="w-1/2">
                <input type="checkbox" name="rememberMe" />
                <label
                  className="font-mono monospace text-blue-900"
                  htmlFor="rememberMe"
                >
                  Remember me
                </label>
              </div>
            </div>
            <div>
              <input
                className="bg-[#4F46E5] w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#611196]"
                type="submit"
                value="Sign up"
              />
            </div>
            <div>
              <p className="text-center">Or continue with</p>
            </div>
            <div className="flex gap-4">
              <button className="bg-[#f01d1d] w-1/2 py-1 rounded-md text-white font-bold cursor-pointer hover:bg-[#581196]">
                Google
              </button>
              <button className="bg-[#24292F] w-1/2 py-1 rounded-md text-white font-bold cursor-pointer hover:bg-[#6c1196]">
                Github
              </button>
            </div>
          </form>
          <p className="text-sm text-white mt-10">
            Designed By{" "}
            <a href="#" className="text-white font-bold">
              Collins Nixon Tech
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
