import LandingPage from "./pages/LandingPage";
import Account from "./pages/Account"
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Route,Routes } from "react-router-dom";
import CreateTodo from "./pages/CreateTodo";

function App() {
  const isUserSignedIn = !!localStorage.getItem('token')
  return (
    <>
    <NavBar/>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        {isUserSignedIn && <Route path="/account" element={<Account/>}/>}
        <Route path="/createTodo" element={<CreateTodo/>}/>
      </Routes>
    </>
  );
}

export default App;
