import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import SignOut from "./Components/SignOut/SignOut";
import useFirebase from "./Hooks/useFirebase";

function App() {
  const { user } = useFirebase();
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route>{user?.displayName && user.displayName}</Route>

        {user?.uid ? (
          <Route path="/signout" element={<SignOut></SignOut>}>
            Sign Out
          </Route>
        ) : (
          <Route path="/login" element={<Login></Login>}>
            Login
          </Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
