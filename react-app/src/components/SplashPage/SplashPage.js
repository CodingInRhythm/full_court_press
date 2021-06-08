import React from "react";
import "./SplashPage.css"
import basketballimage from '../../images/Hoop.jpg'

const SplashPage = () => {
    return (
      <div className="splash_main">
        <img src={basketballimage} />
        <div className="splash_text_container">
          <h1 className="splash_text splash_text1">Full</h1>
          <h1 className="splash_text splash_text2">Court</h1>
          <h1 className="splash_text splash_text3">Press</h1>
        </div>
      </div>
    );
};

export default SplashPage