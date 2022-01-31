import React, { useState, useEffect } from "react";
import { GiPartyFlags } from "react-icons/gi";
import { BsClipboardCheck } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./casamiento.css";

function Casamiento({ isAuth }) {
  const downloadFile = () => {
    const url =
      "https://www.canva.com/design/DAE17nAB-xw/view?utm_content=DAE17nAB-xw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink";
    window.open(url);
  };

  const copyToCLipboard = () => {
    var copyText = document.getElementById("myInput");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    alert("Ya tenes nuestro CBU esperamos tu regalo! 💰 " + copyText.value);
  };

  return (
    <div className='casamiento'>
      <div className='casamiento-container'>
        <div className='casamiento-container-text'>
          <h1>
            <span className='casamiento-container-text-title'>
              ¡Nos Casamos! <GiPartyFlags />
            </span>
          </h1>
          <div className='casamiento-container-text-content'>
            <p>
              Sin ti esto no sería igual Gracias por acompañarnos en esta nueva
              etapa de nuestra vida.
              <br />
              Si queres un detalle con nosotros Suma amor a nuestra aventura!
              <br />
              <div className='container-cbu'>
                <label>CBU:</label>
                <input
                  type='text'
                  defaultValue='0290038410000030306593'
                  id='myInput'
                  className='casamiento-container-copyToCLipboard'
                  disabled
                />{" "}
              </div>
            </p>
          </div>

          <button
            onClick={copyToCLipboard}
            className='casamiento-container-btn'
          >
            CBU{" "}
            <BsClipboardCheck
              style={{
                color: "green",
                fontSize: "1.5rem",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            />
          </button>
          <button onClick={downloadFile} className='casamiento-container-btn'>
            Invitación{" "}
            <MdOpenInNew
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
