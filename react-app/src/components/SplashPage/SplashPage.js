import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {login} from '../../store/session'
import {useHistory} from 'react-router-dom'
import "./SplashPage.css"
import basketballimage from '../../images/Hoop.jpg'

const SplashPage = () => {

  const dispatch = useDispatch()
  const history = useHistory()

  const session = useSelector((state) => state.session)
  console.log(session)
  const loginDemoUser = async (e) => {
      e.preventDefault();
      const data = await dispatch(login("demo@aa.io", "password"));
      if (data.errors) {
        console.log("ERRORS?");
        return;
      }
    history.push('/app')
  }

  useEffect(() => {

  }, [])
    return (
      <div className="splash_main">
        <div className="demoUserbutton">
          <button 
          onClick={(e) => loginDemoUser(e)} 
          id="demoUserbutton" >
            {!session.user  ? (<span>Login as demo user</span>) : (<span>Enter App</span>)}
            </button>
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