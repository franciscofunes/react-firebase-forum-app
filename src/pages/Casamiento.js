import React from "react";
import { GiPartyFlags } from "react-icons/gi";
import { BsClipboardCheck, BsBank } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";

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
    alert(
      "Ya tenes nuestro CBU en tu portapapeles esperamos tu regalo! 💰 " +
        `${copyText.value}`
    );
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
              <button
                onClick={downloadFile}
                className='casamiento-container-btn'
              >
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
              <br />
              Si queres un detalle con nosotros, suma amor a nuestra aventura
              con tu regalo:
              <br />
              <div className='container-cbu'>
                <br />
                <label>
                  <strong>
                    CBU:
                    <BsBank style={{ marginLeft: "10px", color: "brown" }} />
                  </strong>
                </label>
                <input
                  style={{ width: "306px" }}
                  type='text'
                  defaultValue='0290038410000030306593'
                  id='myInput'
                  size='20'
                  className='casamiento-container-copyToCLipboard'
                  disabled
                />{" "}
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
              </div>
              <div className='container-cbu'>
                <br />
                <label>
                  <strong>
                    MERCADO PAGO:
                    <MdOutlinePayments
                      style={{
                        marginLeft: "10px",
                        color: "lightblue",
                        fontSize: "1.5rem",
                      }}
                    />
                  </strong>
                </label>
              </div>
            </p>
            <div class='container-mp-buttons'>
              <button
                onClick={() =>
                  window.open(
                    `
                https://mpago.la/123J8xT
                `,
                    "_blank"
                  )
                }
                className='casamiento-mp-btn'
              >
                <small>$</small> 3.000
              </button>
              <button
                onClick={() =>
                  window.open(
                    `
                https://mpago.la/1EvVPbb
                `,
                    "_blank"
                  )
                }
                className='casamiento-mp-btn'
              >
                <small>$</small> 5.000
              </button>
              <button
                onClick={() =>
                  window.open(
                    `                
                https://mpago.la/2PxMjxw
                `,
                    "_blank"
                  )
                }
                className='casamiento-mp-btn'
              >
                <small>$</small> 10.000
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Casamiento;
