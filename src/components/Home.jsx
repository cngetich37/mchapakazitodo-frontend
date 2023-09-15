import React, { useState, useEffect } from "react";
import axios from "axios";
function Home() {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    getTodo();
  }, []);

  async function getTodo() {
    try {
      const response = await axios.get("http://localhost:5001/api/todos");
      setTodo(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <div className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Day</th>
            <th>Time</th>
          </tr>
        </thead>
        {todo.map((todo) => {
          return (
            <>
              <tbody>
                <tr>
                  <td key={todo} className="is-selected">{todo.name}</td>
                  <td key={todo}>{todo.day}</td>
                  <td key={todo}>{todo.date}</td>
                  <td key={todo}>{todo.time}</td>
                </tr>
              </tbody>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Home;
