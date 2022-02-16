import React from "react";
import { BsFillGiftFill } from "react-icons/bs";
import { FaHandSpock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./PagoExitoso.css";

function Casamiento({ isAuth }) {
  let navigate = useNavigate();

  const goToCreatePost = () => {
    if (isAuth) {
      navigate("/crear-mensaje");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className='casamiento'>
      <div className='casamiento-container'>
        <div className='casamiento-container-text'>
          <h1>
            <span className='casamiento-container-text-title'>
              ¡Muchas gracias por tu regalo! <BsFillGiftFill />
            </span>
          </h1>
          <div className='casamiento-container-text-content'>
            <p>
              Sin ti esto no sería igual, gracias por acompañarnos en esta nueva
              etapa de nuestra vida.
              <br /> <br />
            </p>
          </div>
          <button className='casamiento-container-btn' onClick={goToCreatePost}>
            Dejar Saludo{" "}
            <FaHandSpock
              style={{
                color: "purple",
                fontSize: "1.5rem",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Casamiento;
