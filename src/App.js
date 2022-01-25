import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import Casamiento from "./pages/Casamiento";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      <nav>
        <Link to="/"> Mensajes </Link>
        <Link to="/casamiento"> Casamiento </Link>


        {!isAuth ? (
          <Link to="/login"> Entrar </Link>
        ) : (
          <>
            <Link to="/crearmensaje"> Tu Mensaje </Link>
            <button onClick={signUserOut}> Salir </button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/crearmensaje" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/casamiento" element={<Casamiento/>} />
      </Routes>
    </Router>
  );
}

export default App;
