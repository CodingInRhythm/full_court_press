import React, { useEffect,useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import './LeagueDisplay.css'
import { setCurrentTeam, setMyTeam } from "../../store/team";
import { addPlayer } from "../../store/player"

const LeagueDisplay = ({toggleState, setToggleState, userid, setContent, leagues}) => {
  const [availablePlayers, setAvailablePlayers] = useState([]);
  //ALL PLAYERS IN DB
  let allplayers = useSelector((state) => state.player);
  const team = useSelector((state) => state.team);
  let ownedPlayers = useSelector((state) => state.league.currentleague.players);

  const dispatch = useDispatch();

  let teams = leagues.currentleague.teams;



  let ownedPlayersids = [];
  ownedPlayers.forEach((player) => {
    ownedPlayersids.push(player.id);
  });
//
  let allplayersarray = [];

  //keys of allplayer correspond to player ids, pushing whole player objects here
  for (let [key, value] of Object.entries(allplayers)) {
    allplayersarray.push(allplayers[key]);
  }

  const setTeam = (team) => {
    console.log("SET TEAM?");
    dispatch(setCurrentTeam(team));
    setContent("Team Display");
  };

  const addSelectedPlayer = (playerid) => {
    dispatch(addPlayer(playerid, team.myteam.id));
    setAvailablePlayers([])
  };

  /* USEEFFECT TO DISPLAY AVAILABLE PLAYERS */

  useEffect(() => {
    console.log('On each render:', availablePlayers)

    let availplayers = [];
    console.log('owned PLYER IDS: ', ownedPlayersids)
    console.log('ALL PLAYERS ARRAY', allplayersarray)
    for (let i = 0; i < allplayersarray.length; i++) {
      if (!ownedPlayersids.includes(allplayersarray[i].id)) {
        availplayers.push(allplayersarray[i]);
      }
    }
    console.log('AVAILABLE PLAYERS', availplayers)
    console.log('USESTATE AVAILABLE PLAYERS: ', availablePlayers)
    console.log('redux available players: ', availplayers)
    if (availplayers.length !== availablePlayers.length) {
      console.log(availablePlayers.length)
    setAvailablePlayers(availplayers);
    }
  }, [availablePlayers, toggleState]);

  // useEffect(() => {
  //     console.log('here 2?')
  // }, [availablePlayers])

/* USEEFFECT TO KEEP TRACK OF USERS TEAM IN LEAGUE */

  useEffect(() => {
    console.log('here3')
    let i = 0;
    while (i < teams.length) {
      if (teams[i].user.id === userid) {
        dispatch(setMyTeam(teams[i]));
        break;
      }
      i++;
    }
  }, []);
  return (
    <div className="content-container">
      <h1>League Name: {leagues.currentleague.name}</h1>
      {team.myteam && <h1>Team Name: {team.myteam.name}</h1>}
      <h2>Team Standings</h2>
      {teams &&
        teams.map((team) => {
          return <button key={team.id} onClick={() => setTeam(team)}>{team.name}</button>;
        })}
      <h2>Available Players</h2>
      {availablePlayers.length > 0 &&
        availablePlayers.map((player) => {
          return (
            <div key ={player.id}>
              <h1 key={player.name}>{player.name}</h1>
              <button onClick={() => addSelectedPlayer(player.id)}>Add</button>
            </div>
          );
        })}
    </div>
  );
}

export default LeagueDisplay