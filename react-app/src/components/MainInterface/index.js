import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import Sidebar from '../Sidebar'
import LeagueDisplay from '../LeagueDisplay'
import TeamPage from '../TeamPage'
import {getLeagues} from '../../store/league'
import {getPlayers} from '../../store/player'
import {getTeams} from '../../store/team'
import "./MainInterface.css"



const MainInterface = () => {
  const [content, setContent] = useState('')
  const [toggleState, setToggleState] = useState(false)
  const userid = useSelector((state) => state.session.user.id)
  const leagues = useSelector((state) => state.league);
  console.log(leagues)
  const dispatch = useDispatch()

  /* ----------------------------USEEFFECTS ---------------- */

  useEffect(() => {
    dispatch(getLeagues(userid))
    dispatch(getTeams())
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
            <div className="main-content-area">
              {content === "League Display" && (
                <LeagueDisplay
                  toggleState={toggleState}
                  setToggleState={setToggleState}
                  userid={userid}
                  setContent={setContent}
                  leagues={leagues}
                />
              )}
              {content == "Team Display" && (
                <TeamPage
                  toggleState={toggleState}
                  setToggleState={setToggleState}
                  setContent={setContent}
                  leagues={leagues}
                />
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default MainInterface