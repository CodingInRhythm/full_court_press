import React from "react";
import {useDispatch} from 'react-redux'
import {login} from '../../store/session'
import {useHistory} from 'react-router-dom'
import "./SplashPage.css"
import basketballimage from '../../images/Hoop.jpg'

const SplashPage = () => {

  const dispatch = useDispatch()
  const history = useHistory()
  const loginDemoUser = async (e) => {
      e.preventDefault();
      const data = await dispatch(login("demo@aa.io", "password"));
      if (data.errors) {
        console.log("ERRORS?");
        return;
      }
    history.push('/app')
  }
    return (
      <div className="splash_main">
        <div className="demoUserbutton">
          <button onClick={(e) => loginDemoUser(e)} id="demoUserbutton" >Login as demo user</button>
        </div>
        <div className="splash_text_container">
          <h1 className="splash_text splash_text1">Full</h1>
          <h1 className="splash_text splash_text2">Court</h1>
          <h1 className="splash_text splash_text3">Press</h1>
        </div>
      </div>
    );
};

export default SplashPage