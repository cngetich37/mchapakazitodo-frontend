import Home from "./pages/Home";
import Account from "./pages/Account"
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/account" element={<Account/>}/>
      </Routes>
    </>
  );
}

export default App;
