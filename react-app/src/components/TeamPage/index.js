import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useLocation} from 'react-router-dom'

import {setCurrentTeam} from "../../store/team"
import {removePlayer} from "../../store/team"

const TeamPage = () => {
  const leagues = useSelector((state) => state.league);
  const dispatch = useDispatch();

  const [players, setPlayers] = useState([]);
  const [currentTeamState, setCurrentTeamState] = useState({});
  let location = useLocation();
  
  let teams;
  let path = location.pathname.split("/");
  let teamid = Number(path[path.length - 1]);


  if (leagues.hasOwnProperty("currentleague")) {
    console.log("setting teams?");
    teams = leagues.currentleague.teams;
    for (let i = 0; i < teams.length; i++) {
      if (teams[i].id === teamid) {
        console.log("SHOUlD MAKE IT");
        dispatch(setCurrentTeam(teams[i]));
        
      }
    }
  }
 
  console.log()


  const dropPlayer = (playerid) => {
    // fetch(`/api/teams/${currentTeamState.id}`, {
    //     method: 'DELETE',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({id})
    // })
    dispatch(removePlayer(currentTeamState, playerid));
  };

  useEffect(() => {
      if (teams.hasOwnProperty("currentteam")){
    console.log(teams.currentteam.players);
      }
    // setCurrentTeamState(leagueteams);
    console.log(players);
  }, []);
  
  return (
    <>
      {currentTeamState.players?.length > 0 &&
        currentTeamState.players.map((player) => {
          return (
            <>
              <h1>{player.name}</h1>)
              <button onClick={() => dropPlayer(player.id)}>Drop Player</button>
            </>
          );
        })}
    </>
  );
}
 

export default TeamPage