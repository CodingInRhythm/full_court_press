import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import './ContentDisplay.css'

const ContentDisplay = () => {

  let league = useSelector((state) => state.league)

  let teams;
  if (league.currentleague) {
    teams = league.currentleague.teams;
  }
    return (
      <div className="content-container"> 
        <h1>CONTENTDISPLAY</h1>
        {teams && teams.map((team) => {
          return <Link to={`/app/teams/${team.id}`}>{team.name}</Link>
        })}
      </div>
    );
}

export default ContentDisplay