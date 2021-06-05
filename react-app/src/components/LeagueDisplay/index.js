import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import './LeagueDisplay.css'

const LeagueDisplay = ({setContent, leagues}) => {

 
  let teams;
  if (leagues.currentleague) {
    teams = leagues.currentleague.teams;
  }
    return (
      <div className="content-container"> 
        <h1>LeagueDisplay</h1>
        {teams && teams.map((team) => {
          return <Link onClick={() => setContent("Team Display")}to={`/app/teams/${team.id}`}>{team.name}</Link>
        })}
      </div>
    );
}

export default LeagueDisplay