import React, { useEffect,useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import './LeagueDisplay.css'
import { setCurrentTeam } from "../../store/team";

const LeagueDisplay = ({setContent, leagues}) => {
  const [availablePlayers, setAvailablePlayers] = useState([])
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
  let allplayers = useSelector((state) => state.player)
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

  const addPlayer = () => {
    console.log('ADDBUTTON')
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
    
    console.log(availablePlayers)
    return (
      <div className="content-container"> 
        <h1>Team Standings</h1>
        {teams && teams.map((team) => {
          return <Link onClick={() => setTeam(team)}to={`/app/teams/${team.id}`}>{team.name}</Link>
        })}
        <h1>Available Players</h1>
        {availablePlayers.length > 0 && availablePlayers.map((player) => {
          return (
            <>
              <h1>{player.name}</h1>
              <button onClick={addPlayer}>Add</button>
          </>
          )
        })}

      </div>
    );
}

export default LeagueDisplay