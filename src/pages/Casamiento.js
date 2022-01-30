import React, { useState, useEffect } from "react";

function Casamiento({ isAuth }) {

  const openVideo = () => {
    window.location.href = 'https://www.canva.com/design/DAE17nAB-xw/nsmalc5iv5oTFP9mkbk30g/view';
};
  return (
    <div className="Casamiento">
      <button onClick={openVideo}>Invitación</button>
<iframe src="https://www.canva.com/design/DAE17nAB-xw/nsmalc5iv5oTFP9mkbk30g/view"></iframe>
<iframe src="https://platform.twitter.com/widgets/tweet_button.html"></iframe>
    </div>
  );
}

export default Casamiento;
