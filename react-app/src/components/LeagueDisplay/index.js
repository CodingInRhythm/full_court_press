import React, { useEffect,useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import './LeagueDisplay.css'
import { setCurrentTeam, setMyTeam } from "../../store/team";
import { addPlayer } from "../../store/player"

const LeagueDisplay = ({toggleState, setToggleState, userid, setContent, leagues}) => {
  // const [availablePlayers, setAvailablePlayers] = useState([]);
  //ALL PLAYERS IN DB
  let allplayers = useSelector((state) => state.player);
  const team = useSelector((state) => state.team);
  const availablePlayers = useSelector((state) => state.league.currentleague.available_players)
  const teams = useSelector((state) => state.league.currentleague.teams)
  const myteam = useSelector((state) => state.league.currentleague.myteam)
  const dispatch = useDispatch();

  console.log(leagues)
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
    
    dispatch(addPlayer(playerid,myteam.id));
   
  };

  /* USEEFFECT TO DISPLAY AVAILABLE PLAYERS */

  // useEffect(() => {
  //   if (availableplayers){
  //     setAvailablePlayers(availableplayers)
  //   } 
    
  // }, [availableplayers]);

  // useEffect(() => {
  //     console.log('here 2?')
  // }, [availablePlayers])

/* USEEFFECT TO KEEP TRACK OF USERS TEAM IN LEAGUE */

  // useEffect(() => {
  //   console.log('here3')
  //   let i = 0;
  //   if(teams) {
    
  // }, [teams]);
  return availablePlayers && (
    <div className="content-container">
      <h1>
        League Name:{" "}
        <span className="league-name"> {leagues.currentleague.name}</span>
      </h1>
      {myteam.name && (
        <h2>
          Team Name: <span className="team-name">{myteam.name}</span>
        </h2>
      )}
      <div className="standings-container">
        <h2 className="standings">
          Team Standings
          {teams &&
            teams.map((team) => {
              return (
                <button key={team.id} onClick={() => setTeam(team)}>
                  {team.name}
                </button>
              );
            })}
        </h2>
      </div>
      <h2>Available Players</h2>
      {
        Object.values(availablePlayers).map((player) => {
          return (
            <div key={player.id}>
              <h1 className="player-name" key={player.name}>
                {player.name}
              </h1>
              <button onClick={() => addSelectedPlayer(player.id)}>Add</button>
            </div>
          );
        })}
    </div>
  );
}

export default LeagueDisplay