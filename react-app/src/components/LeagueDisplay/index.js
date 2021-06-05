import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import './LeagueDisplay.css'
import { setCurrentTeam } from "../../store/team";

const LeagueDisplay = ({setContent, leagues}) => {

  const dispatch = useDispatch()
  let teams = leagues.currentleague.teams;


  const setTeam = (team) => {
    dispatch(setCurrentTeam(team));
    setContent("Team Display")
  }


    return (
      <div className="content-container"> 
        <h1>LeagueDisplay</h1>
        {teams && teams.map((team) => {
          return <Link onClick={() => setTeam(team)}to={`/app/teams/${team.id}`}>{team.name}</Link>
        })}
      </div>
    );
}

export default LeagueDisplay