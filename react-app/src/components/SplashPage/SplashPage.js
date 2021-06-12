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

  const loginDemoUser = async (e) => {
      e.preventDefault();
      const data = await dispatch(login("demo@aa.io", "password"));
      if (data.errors) {
        
        return;
      }
    history.push('/app')
  }

  useEffect(() => {

  }, [])
    return (
      <div className="splash_main">
        <div className="splash-court">
          <div className="baselineleft">
            <h1 className="splash_text baselineleft-text">HOME</h1>
          </div>
          <div className="baselineright">
            <h1 className="splash_text baselineright-text">AWAY</h1>
          </div>
          {/* <div className="demoUserbutton">
          <button 
          onClick={(e) => loginDemoUser(e)} 
          id="demoUserbutton" >
            {!session.user  ? (<span>Login as demo user</span>) : (<span>Enter App</span>)}
            </button>
        </div> */}
          <div className="splash_text_container">
            <h1>Welcome to Full Court Press</h1>
            <h2>The best basketball trading card app for you and your friends</h2>
          </div>
          <div className="splash-courtimg"></div>
        </div>
      </div>
    );
};

export default SplashPage