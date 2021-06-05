import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import Sidebar from '../Sidebar'
import LeagueDisplay from '../LeagueDisplay'
import TeamPage from '../TeamPage'
import {getLeagues} from '../../store/league'
import "./MainInterface.css"



const MainInterface = () => {
  const [content, setContent] = useState('League Display')
  const userid = useSelector((state) => state.session.user.id)
  const leagues = useSelector((state) => state.league);
  console.log(leagues)
  const dispatch = useDispatch()

  /* ----------------------------USEEFFECTS ---------------- */

  useEffect(() => {
    dispatch(getLeagues(userid))
  }, []);
  return (
    <>
      <div className="main_interface_container">
        {Object.keys(leagues).length > 0 && (
          <>
            <Sidebar
              setContent={setContent}
              leagues={leagues}
              userid={userid}
            />
            {content == "League Display" && 
            <LeagueDisplay setContent={setContent} leagues={leagues} />}
            {content == "Team Display" 
            && <TeamPage setContent={setContent} leagues={leagues} />}
          </>
        )}
      </div>
    </>
  );
}

export default MainInterface