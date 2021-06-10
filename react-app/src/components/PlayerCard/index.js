import React from 'react'
import './PlayerCard.css'
const PlayerCard = ({player}) => {
    return (
      <div className="player-card-container">
        <div className="top-row">
          <div className="basic-info">
            <h1>{player.name}</h1>
            <h1>{player.position}</h1>
          </div>
          <div className="headshot">
            <img height="100" width="100" src={player.photo}></img>
          </div>
        </div>
        <div className="player-stats">
          <span>PPG: {player.ppg}</span>
          <span>APG: {player.assists}</span>
          <span>RPG: {player.rebounds}</span>
        </div>
      </div>
    );
}

export default PlayerCard