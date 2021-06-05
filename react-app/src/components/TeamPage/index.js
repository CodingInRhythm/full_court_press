import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useLocation} from 'react-router-dom'
import {removePlayer, setCurrentTeam} from "../../store/team"

const TeamPage = ({leagues}) => {

  const dispatch = useDispatch();
  let location = useLocation();

  const [players, setPlayers] = useState([]);
  const [currentTeamState, setCurrentTeamState] = useState({});
  const [isClicked, setIsClicked] = useState(false)
  
  const currentteam = useSelector((state) => state.team.currentteam)
//   let teams;
//   let path = location.pathname.split("/");
//   let teamid = Number(path[path.length - 1]);


//   if (leagues.hasOwnProperty("currentleague")) {
//     console.log("setting teams?");
//     teams = leagues.currentleague.teams;
//     for (let i = 0; i < teams.length; i++) {
//       if (teams[i].id === teamid) {
//         console.log("SHOUlD MAKE IT");
//         dispatch(setCurrentTeam(teams[i]));
        
//       }
//     }
//   }
 


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

//   useEffect(() => {
//       if (teams.hasOwnProperty("currentteam")){
//     console.log(teams.currentteam.players);
//       }
//     // setCurrentTeamState(leagueteams);
//     console.log(players);
//   }, []);

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