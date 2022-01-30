import "./login.css";
import React, { useEffect, useState } from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/crear-mensaje");
    });
  };

  return (
    <div className='loginPage'>
      <h4>Nos casamos 💒</h4>
      <p>Ingresa con tu cuenta de Gmail y déjanos tus buenos deseos </p>
      <button className='login-with-google-btn' onClick={signInWithGoogle}>
        Ingresar con google
      </button>
    </div>
  );
}

export default Login;
