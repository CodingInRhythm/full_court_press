import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useLocation} from 'react-router-dom'
import {removePlayer, removeTeam} from "../../store/league"
import {PlayerCardModal} from '../PlayerCard/PlayerCardModal'
import './TeamPage.css'


const TeamPage = ({toggleState, setToggleState, setContent, leagues}) => {

  const dispatch = useDispatch();
  let location = useLocation();

  const [players, setPlayers] = useState([]);
  const [currentTeamState, setCurrentTeamState] = useState({});
  const [isClicked, setIsClicked] = useState(false)
  
  const currentteam = useSelector((state) => state.league.currentleague.currentteam)
  const myteam = useSelector((state) => state.league.currentleague.myteam)

  const dropPlayer = (player) => {
    dispatch(removePlayer(currentteam.id, player));
    setIsClicked(!isClicked)
    setToggleState(!toggleState)
  };

  const requestTrade = (player) => {
    return
  }
  const deleteTeam = async() => {
    await dispatch(removeTeam(currentteam.id))
    setContent("")
  }
useEffect(() => {
    
}, [isClicked])

useEffect(() => {
  setContent("Team Display")
}, [])

    return myteam ? (
      <div className="team-display">
        <div className="team-banner">
          <h1 className="team-name">{currentteam.name}</h1>
          <button className="team-delete" onClick={deleteTeam}>
            DELETE TEAM
          </button>
        </div>
        <div className="sideline-l"></div>
        <div className="sideline-r"></div>
        <div className="player-position"> </div>
        {currentteam.players.map((player, idx) => {
          return (
            <div id={`player-position-${idx}`} className="player-container">
              <h2>{player.name}</h2>
              <PlayerCardModal player={player} />
              {currentteam.id === myteam.id && (
                <button
                  className="drop-plyr-button"
                  onClick={() => dropPlayer(player)}
                >
                  Drop Player
                </button>
              )}
            </div>
          );
        })}

        <div className="baseline"></div>
      </div>
    ) : null;
}
 

export default TeamPage