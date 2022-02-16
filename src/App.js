import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import Casamiento from "./pages/Casamiento";
import PagoExitoso from "./pages/PagoExitoso";

import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import Footer from "./components/Footer/Footer";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      setCurrentUser(currentUser);
    });
  }, []);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth} />} />
        <Route path='/crear-mensaje' element={<CreatePost isAuth={isAuth} />} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
        <Route path='/casamiento' element={<Casamiento />} />
        <Route path='/pago-exitoso' element={<PagoExitoso />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
