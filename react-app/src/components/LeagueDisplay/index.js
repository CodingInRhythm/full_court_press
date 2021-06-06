import React, { useEffect,useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import './LeagueDisplay.css'
import { setCurrentTeam, setMyTeam } from "../../store/team";
import { addPlayer } from "../../store/player"

const LeagueDisplay = ({userid, setContent, leagues}) => {
  const [availablePlayers, setAvailablePlayers] = useState([])
  let allplayers = useSelector((state) => state.player)
  const team = useSelector((state) => state.team)


  const dispatch = useDispatch()


  let teams = leagues.currentleague.teams;
  let players = leagues.currentleague.players;
  console.log(players)
  //TAKEN PLAYERS = array of taken players ids

  let takenplayers = []
  players.forEach((player) => {
    takenplayers.push(player.id)
  }) 
  console.log(takenplayers)
  //ALL PLAYERS IN DB
  console.log(allplayers)
  let allplayersarray = []
  for (let [key, value] of Object.entries(allplayers)) {
    allplayersarray.push(allplayers[key])
  }

  console.log(allplayersarray)
  // .forEach((player) => allplayersarray.push(player.id))
  // console.log(allplayersarray)
  const setTeam = (team) => {
    dispatch(setCurrentTeam(team));
    setContent("Team Display")
  }

  const addSelectedPlayer = (playerid) => {
    dispatch(addPlayer(playerid, team.myteam.id))
  }
  useEffect(() => {
      let availplayers = []
      for (let i = 0; i < allplayersarray.length; i++) {
        if (!takenplayers.includes(allplayersarray[i].id)) {
          availplayers.push(allplayersarray[i])
        }
      }
      console.log(availplayers)
      setAvailablePlayers(availplayers)
    }, [])

  useEffect(() => {
    let i = 0;
    while (i < teams.length) {
      if (teams[i].user.id === userid) {
        dispatch(setMyTeam(teams[i]))
        break;
      }
      i++
    }
  }, [])
    
    console.log(availablePlayers)
    return (
      <div className="content-container">
        <h1>League Name: {leagues.currentleague.name}</h1>
        {team.myteam && <h1>Team Name: {team.myteam.name}</h1>}
        <h2>Team Standings</h2>
        {teams &&
          teams.map((team) => {
            return (
              <Link onClick={() => setTeam(team)} to={`/app/teams/${team.id}`}>
                {team.name}
              </Link>
            );
          })}
        <h2>Available Players</h2>
        {availablePlayers.length > 0 &&
          availablePlayers.map((player) => {
            return (
              <>
                <h1>{player.name}</h1>
                <button onClick={() => addSelectedPlayer(player.id)}>Add</button>
              </>
            );
          })}
      </div>
    );
}

export default LeagueDisplay