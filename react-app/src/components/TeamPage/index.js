import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useLocation} from 'react-router-dom'
import {removePlayer, removeTeam} from "../../store/league"
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
    setContent('')
  }
useEffect(() => {
    
}, [isClicked])

useEffect(() => {
  setContent("Team Display")
}, [])

    return (
      <div className="team-display">
        <button className="team-delete" onClick={deleteTeam}>DELETE TEAM</button> 
        {currentteam.players.map((player) => {
          return (
            <div className="player-container">
              <h1>{player.name}</h1>
              {currentteam.id === myteam.id ? (
                <button onClick={() => dropPlayer(player)}>Drop Player</button>
              ) : (
                <button onClick={() => requestTrade(player)}>
                  Request Trade
                </button>
              )}
            </div>
          );
        })}
      </div>
    );
}
 

export default TeamPage