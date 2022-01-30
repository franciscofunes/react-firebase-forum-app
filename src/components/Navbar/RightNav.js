import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 10px 100px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #000;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 5.2rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

export const Avatarhamburger = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  padding: 3px;
  margin-left: 3px;
`;

const RightNav = ({ open, closeBurger }) => {
  const [currentUser, setCurrentUser] = useState();
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  const isMobile = width <= 768;

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

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
      {isMobile && (
        <Ul open={open} onClick={closeBurger}>
          <li>
            {currentUser && (
              <Avatarhamburger src={currentUser.photoURL}></Avatarhamburger>
            )}
          </li>
          <Link to='/'>
            <li>Mensajes</li>
          </Link>
          <Link to='/casamiento'>
            <li>Casamiento</li>
          </Link>
          <Link
            to={isAuthString ? "/crear-mensaje" : "/login"}
            onClick={!isAuthString ? loginAlert : ""}
          >
            <li>Saludar 👋</li>
          </Link>

          {isAuthString && (
            <>
              <Link to='/'>
                <li onClick={signUserOut}>Salir ✖️</li>
              </Link>
            </>
          )}
        </Ul>
      )}
    </>
  );
};

export default RightNav;
