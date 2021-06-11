import React, { useEffect,useState, useRef } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import './LeagueDisplay.css'
import { setCurrentTeam, removeLeague, setMyTeam } from "../../store/league";
import { addPlayer } from "../../store/player"
import {PlayerCardModal} from "../PlayerCard/PlayerCardModal"

const LeagueDisplay = ({toggleState, setToggleState, userid, setContent, leagues}) => {
  const [isFilled, setIsFilled] = useState(false)
  //ALL PLAYERS IN DB
  let allplayers = useSelector((state) => state.player);
  const team = useSelector((state) => state.team);
  const availablePlayers = useSelector((state) => state.league.currentleague.available_players)
  
  const teams = useSelector((state) => state.league.currentleague.teams)
  const myteam = useSelector((state) => state.league.currentleague.myteam)
  
  const addPlayerEl = useRef(null)
  const dispatch = useDispatch();

  let allplayersarray = [];

  //keys of allplayer correspond to player ids, pushing whole player objects here
  for (let [key, value] of Object.entries(allplayers)) {
    allplayersarray.push(allplayers[key]);
  }

  const setTeam = (team) => {
 
    dispatch(setCurrentTeam(team));
    setContent("Team Display");
  };

  const addSelectedPlayer = (playerid) => {
    
    dispatch(addPlayer(playerid,myteam.id));
   
  };

  const deleteLeague = () => {
    dispatch(removeLeague(leagues.currentleague.id))
    setContent("")
  }
  useEffect(() => {
    if (myteam) {
      if (myteam.players.length >= 5 ) {
       
        setIsFilled(true)
      }
    }
  })

  return availablePlayers && myteam ? (
    <div className="content-container">
      <div className="league-info">
        <div className="nameanddelete">
          <h1>
            League Name:{" "}
            <span className="league-name"> {leagues.currentleague.name}</span>
          </h1>
          <button className="delete-league" onClick={deleteLeague}>
            DELETE LEAGUE
          </button>
        </div>
        {myteam.name && (
          <div>
            <h2>
              My Team: <span className="team-name">{myteam.name}</span>
            </h2>
            <h3>Spots filled: {myteam.players.length} / 5</h3>
          </div>
        )}
        <div className="standings-container">
          <h2 className="standings">
            Teams
            {teams &&
              teams.map((team) => {
                return (
                  <button
                    className="team_button"
                    key={team.id}
                    onClick={() => setTeam(team)}
                  >
                    {team.name}
                  </button>
                );
              })}
          </h2>
        </div>
      </div>
      <div className="available-players">
        <h2>Available Players</h2>
        {Object.values(availablePlayers).map((player) => {
          return (
            <div key={player.id}>
              <h1 className="player-name" key={player.name}>
                {player.name}
              </h1>
              <PlayerCardModal player={player} />
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <h1>You are not in this league</h1>
  );
}

export default LeagueDisplay