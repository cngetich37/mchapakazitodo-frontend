import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function CreateTodo() {
  const[name, setName] = useState("")
  const[date, setDate] = useState("")
  const[day, setDay] = useState("")
  const[time, setTime] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    fetchTodos();
  }, [])

  const fetchTodos = () =>{
    axios.get("http://localhost:5001/api/todos/")
    .then((response) =>{console.log(response.data)})
  }

  const handleCreate = async(event) =>{
    event.preventDefault();
    try {
        const createTodos = await axios.post("http://localhost:5001/api/todos/",{name,date,day,time})
        setName("")
        setDate("")
        setDay("")
        setTime("")
        navigate("/")
    } catch (error) {
        alert("Please add the todo")
    }
  }
  
  return (
    <>
      <div className="bg-gray-600 w-screen h-screen flex items-center">
        <div className="h-max mx-auto flex flex-col items-center">
          {/* <img className="h-[45px] w-[50px] mb-5" src="../src/assets/logo.png" alt="logo" /> */}
          <h1 className="text-3xl font-bold font-mono monospace text-white text-center italic pb-2">
            Create A Todo
          </h1>
          <form
            className="bg-white shadow-xl p-8 flex w-[100%] flex-col gap-2 text-md"
            onSubmit={handleCreate}
          >
            <div>
              <label
                className="text-blue-900 font-bold font-mono monospace inline-block pb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="border border-purple-600 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
                type="text"
                name="text"
                placeholder="cnixontech@gmail.com"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label
                className="text-blue-900 font-bold font-mono monospace inline-block pb-2"
                htmlFor="Date"
              >
                Date
              </label>
              <input
                className="border border-purple-600 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
                type="date"
                name="date"
                placeholder="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <label
                className="text-blue-900 font-bold font-mono monospace inline-block pb-2"
                htmlFor="email"
              >
                Day
              </label>
              <input
                className="border border-purple-600 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
                type="day"
                name="day"
                placeholder="day"
                value={day}
                onChange={(e) => setDay(e.target.value)}
              />
            </div>
            <div>
              <label
                className="text-blue-900 font-mono monospace font-bold inline-block pb-2"
                htmlFor="password"
              >
                Time
              </label>
              <input
                className="border border-purple-600 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
                type="text"
                name="text"
                placeholder="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div>
              <input
                className="bg-[#4F46E5] w-full mt-4 py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#611196]"
                type="submit"
                value="Create Todo"
              />
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

export default CreateTodo;
