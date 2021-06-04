import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'

const TeamPage = () => {
    const team = useSelector((state) => state.league)
    const [players, setPlayers] = useState([])
    let location = useLocation()
    let path = location.pathname.split("/");
    let teamid = Number(path[path.length - 1]);
   

    if (team.currentleague && players.length < 1) {
        console.log(team.currentleague.players)
        setPlayers(team.currentleague.players)
    }
    /*Strategy here:
    I want current team to my redux store and basically dispatch a setCurrentTeam here on the first render.  
    It'll have all the info it needs to 
    */

    useEffect(() => {
   
        console.log(players)

    }, [])
    return (
        <>
            <h1>ANOTHER BATTLE OVERCOME</h1>
            {players.length > 0 && players.map((player) => {
                return <h1>{player.name}</h1>
            })}
        </>
        
    )
}

export default TeamPage