import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useLocation} from 'react-router-dom'
import {removePlayer} from "../../store/league"

const TeamPage = ({toggleState, setToggleState, setContent, leagues}) => {

  const dispatch = useDispatch();
  let location = useLocation();

  const [players, setPlayers] = useState([]);
  const [currentTeamState, setCurrentTeamState] = useState({});
  const [isClicked, setIsClicked] = useState(false)
  
  const currentteam = useSelector((state) => state.league.currentleague.myteam)

  const dropPlayer = (player) => {
    // fetch(`/api/teams/${currentTeamState.id}`, {
    //     method: 'DELETE',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({id})
    // })
    dispatch(removePlayer(currentteam.id, player));
    setIsClicked(!isClicked)
    setToggleState(!toggleState)
  };


useEffect(() => {
    
}, [isClicked])

useEffect(() => {
  setContent("Team Display")
}, [])

    return (
        <>
            {currentteam.players.map((player) => {
                return (
                    <div className="player-container">    
                      <h1>{player.name}</h1>
                      <button onClick={() => dropPlayer(player)}>Drop Player</button>
                    </div>
            )}
          )}
        </>
    )
}
 

export default TeamPage