import React, { useState, useEffect } from "react";
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavBtnLinkExit,
  Avatar,
} from "./NavbarElements";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import Burger from "./Burger";

const Navbar = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [currentUser, setCurrentUser] = useState();

  const isAuthString = localStorage.getItem("isAuth");

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      setCurrentUser(currentUser);
    });
  }, [currentUser]);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  const loginAlert = () => {
    alert(
      "Para ingresar a la sección de crear mensaje, debes estar logueado 👩‍🚀"
    );
  };
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require("../../images/logo.png")} alt='logo' width={60} />
        </NavLink>
        <Burger />
        <NavMenu>
          <NavLink to='/'>Mensajes</NavLink>
          <NavLink to='/casamiento' activestyle='true'>
            Casamiento
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink
            to={isAuthString ? "/crear-mensaje" : "/login"}
            onClick={!isAuthString ? loginAlert : ""}
          >
            Saludar 👋
          </NavBtnLink>
          {isAuthString && (
            <>
              <NavBtnLinkExit to='/' onClick={signUserOut}>
                Salir ✖️
              </NavBtnLinkExit>
              {currentUser && <Avatar src={currentUser.photoURL}></Avatar>}
            </>
          )}
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
