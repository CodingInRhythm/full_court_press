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
  if (leagues.currentleague) {
    teams = leagues.currentleague.teams;
  }
  let path = location.pathname.split("/");
  let teamid = Number(path[path.length - 1]);
 if (teams) {
  for (let i=0; i < teams.length; i++) {

      if (teams[i].id === teamid) {
          console.log('SHOUlD MAKE IT')
          setCurrentTeamState(teams[i])
      }
  }
 }
//   if (team.currentteam && players.length < 1) {
//     console.log("inside??");
//     console.log(team.currentteam.players);
//     setPlayers(team.currentteam.players);
//     // leagueteams = te.teams
//   }

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
    dispatch(setCurrentTeam(currentTeamState));
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