import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import './LeagueDisplay.css'
import { setCurrentTeam } from "../../store/team";

const LeagueDisplay = ({setContent, leagues}) => {

  const dispatch = useDispatch()
  let teams = leagues.currentleague.teams;
  let allplayers = useSelector((state) => state.player)


  const setTeam = (team) => {
    dispatch(setCurrentTeam(team));
    setContent("Team Display")
  }

  useEffect(() => {
      allplayers.forEach((player) => {
        // if (player.id)
      })
  }, [])

    return (
      <div className="content-container"> 
        <h1>Team Standings</h1>
        {teams && teams.map((team) => {
          return <Link onClick={() => setTeam(team)}to={`/app/teams/${team.id}`}>{team.name}</Link>
        })}
        <h1>Available Players</h1>

      </div>
    );
}

export default LeagueDisplay