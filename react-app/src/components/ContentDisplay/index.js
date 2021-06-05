import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import './ContentDisplay.css'

const ContentDisplay = ({leagues}) => {

 
  let teams;
  if (leagues.currentleague) {
    teams = leagues.currentleague.teams;
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