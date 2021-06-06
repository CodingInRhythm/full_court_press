import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useLocation} from 'react-router-dom'
import {removePlayer} from "../../store/team"

const TeamPage = ({leagues}) => {

  const dispatch = useDispatch();
  let location = useLocation();

  const [players, setPlayers] = useState([]);
  const [currentTeamState, setCurrentTeamState] = useState({});
  const [isClicked, setIsClicked] = useState(false)
  
  const currentteam = useSelector((state) => state.team.currentteam)

  const dropPlayer = (playerid) => {
    // fetch(`/api/teams/${currentTeamState.id}`, {
    //     method: 'DELETE',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({id})
    // })
    dispatch(removePlayer(currentteam.id, playerid));
    setIsClicked(!isClicked)
  };


useEffect(() => {
    
}, [isClicked])

    return (
        <>
            {currentteam.players.map((player) => {
                return (
                    <>    
                    <h1>{player.name}</h1>
                    <button onClick={() => dropPlayer(player.id)}>Drop Player</button>
                    </>
            )}
          )}
        </>
    )
}
 

export default TeamPage