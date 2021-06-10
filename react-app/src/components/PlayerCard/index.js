import React from 'react'
import './PlayerCard.css'
const PlayerCard = ({player}) => {
    return (
      <div className="player-card-container">
        <span className="name">{player.name}</span>
        <span className="position">{player.position}</span>
        <button className="adddrop-button">Add/Drop Button</button>
        <div className="player-stats">
          <span className="ppg">PPG: {player.ppg}</span>
          <span className="asts">APG: {player.assists}</span>
          <span className="rbs">RPG: {player.rebounds}</span>
        </div>
        <img className="headshotimg" src={player.photo}></img>
      </div>
    );
}

export default PlayerCard