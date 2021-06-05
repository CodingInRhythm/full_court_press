import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useLocation} from 'react-router-dom'

import {setCurrentTeam} from "../../store/team"

const TeamPage = () => {
    const team = useSelector((state) => state.league)
    const dispatch = useDispatch()

    const [players, setPlayers] = useState([])
    const [currentTeamState, setCurrentTeamState] = useState({})
    let location = useLocation()
    let path = location.pathname.split("/");
    let teamid = Number(path[path.length - 1]);
    let leagueteams;
    
   

    if (team.currentleague && players.length < 1) {
        console.log(team.currentleague.players)
        setPlayers(team.currentleague.players)
        leagueteams = team.currentleague.teams
        for (let i=0; i < leagueteams.length; i++) {
            console.log(leagueteams[i])
            console.log(leagueteams[i].id)
            if (leagueteams[i].id === teamid) {
                console.log('SHOUKD MAKE IT')
                setCurrentTeamState(leagueteams[i])
            }
        }
       
    }

    const dropPlayer = (id) => {
        fetch(`/api/teams/${currentTeamState.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(id)
        })
    }

    useEffect(() => {
        dispatch(setCurrentTeam(currentTeamState))
        console.log(players)

    }, [])
    return (
        <>
            <h1>ANOTHER BATTLE OVERCOME</h1>
            {currentTeamState.players?.length > 0 && currentTeamState.players.map((player) => {
                return (
                    <>
                        <h1>{player.name}</h1>)
                        <button onClick={() => dropPlayer(player.id)}>Drop Player</button>
                    </>
            )})}
        </>
        
    )
}

export default TeamPage