import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {joinLeague} from '../../store/league'
import "./Sidebar.css"
const Sidebar = () => {

                /* useSELECTORS AND STATE VARIABLES */
    const leagues = useSelector((state) => state.league)
    
    
    const [selectedLeague, setSelectedLeague] = useState(null)

    const dispatch = useDispatch()

                /* FUNCTIONS */
    const handleChange = (e) => {
        e.preventDefault()
        setSelectedLeague(e.target.value)
    }
    console.log(selectedLeague)

    const submitLeague = (e) => {
        e.preventDefault()
        dispatch(joinLeague(selectedLeague))
        /*When we submit a league to join going to have to do a few things:
        If there is room in the league, need to make a team name and check whether that team
        name is taken.
        Then we need to add the team to that league in both dB and the store.  
        Also need to make sure leagues with max members are not shown. 
        */
    }
                
    return (
        <div className="sidebar-container">
            {Object.keys(leagues.userleagues).length > 0 ?  (
            <ul>
                {Object.keys(leagues.userleagues).map((league) => {
                   return (
                       <li>
                           {leagues.userleagues[league].name}
                       </li>
                   )
                })}
            </ul>

            ) : (
                <div>Join a league!</div>
            )}
            <form onSubmit={submitLeague}>
                <label>Join a league</label>
                <select name="leagueid" value={selectedLeague} onChange={handleChange}>
                    <option value="">Please select a league to join</option>
                    {Object.keys(leagues.otherleagues)?.length > 0 && 
                    Object.keys(leagues.otherleagues).map((league) => {
                        return (
                        <option value={leagues.otherleagues[league].id}>
                            {leagues.otherleagues[league].name}
                        </option>)
                    })}
                </select>
                <button id="league-submit-button" type="submit">Join</button>
            </form>
        </div>
    )
}

export default Sidebar