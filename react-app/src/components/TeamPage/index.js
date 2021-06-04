import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useLocation} from 'react-router-dom'

const TeamPage = () => {
    const team = useSelector((state) => state.league)
    const dispatch = useDispatch()

    const [players, setPlayers] = useState([])
    let location = useLocation()
    let path = location.pathname.split("/");
    let teamid = Number(path[path.length - 1]);
    let leagueteams;
    let currenteam;
   

    if (team.currentleague && players.length < 1) {
        console.log(team.currentleague.players)
        setPlayers(team.currentleague.players)
        leagueteams = team.currentleague.teams
        for (i=0; i < leagueteams.length; i++) {
            if (leagueteams[i].id === teamid) {
                currentteam = leagueteams[i]
            }
        }
    }
    /*Strategy here:
    I want current team to my redux store and basically dispatch a setCurrentTeam here on the first render.  
    It'll have all the info it needs to 
    */

    useEffect(() => {
        // dispatch()
        console.log(players)

    }, [])
    return (
        <>
            <h1>ANOTHER BATTLE OVERCOME</h1>
            {players.length > 0 && players.map((player) => {
                return <h1 key={player.id}>{player.name}</h1>
            })}
        </>
        
    )
}

export default TeamPage