import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import Sidebar from '../Sidebar'
import LeagueDisplay from '../LeagueDisplay'
import TeamPage from '../TeamPage'
import {getLeagues} from '../../store/league'
import {getPlayers} from '../../store/player'
import "./MainInterface.css"



const MainInterface = () => {
  const [content, setContent] = useState('')
  const userid = useSelector((state) => state.session.user.id)
  const leagues = useSelector((state) => state.league);
  console.log(leagues)
  const dispatch = useDispatch()

  /* ----------------------------USEEFFECTS ---------------- */

  useEffect(() => {
    dispatch(getLeagues(userid))
  }, []);

  useEffect(() => {
    dispatch(getPlayers())
  }, [])

  useEffect(() => {

  },[content])
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
            {content ==="League Display" && 
            <LeagueDisplay userid={userid} setContent={setContent} leagues={leagues} />}
            {content == "Team Display" 
            && <TeamPage setContent={setContent} leagues={leagues} />}
          </>
        )}
      </div>
    </>
  );
}

export default MainInterface