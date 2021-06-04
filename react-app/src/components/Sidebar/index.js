import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {joinLeague} from '../../store/league'
import {addTeam} from '../../store/team'

import "./Sidebar.css"
const Sidebar = () => {

                /* useSELECTORS AND STATE VARIABLES */
    const leagues = useSelector((state) => state.league)
    const userid = useSelector((state) => state.session.user.id)
    
    const [selectedLeague, setSelectedLeague] = useState(null)
    const [teamName, setTeamName] = useState("")

    const dispatch = useDispatch()

                /* FUNCTIONS */
    const handleChange = (e) => {
        e.preventDefault()
        setSelectedLeague(e.target.value)
    }
    console.log(selectedLeague)

    const submitTeam = (e) => {
        e.preventDefault()
        // dispatch(joinLeague(selectedLeague))
        /*When we submit a league to join going to have to do a few things:
        If there is room in the league, need to make a team name and check whether that team
        name is taken.
        Then we need to add the team to that league in both dB and the store.  
        Also need to make sure leagues with max members are not shown. 
        */
       dispatch(addTeam({
           "name": teamName,
            "user_id": userid,
            "league_id": selectedLeague,
        }
       ))
    }
          console.log(teamName)      
    return (
      <div className="sidebar-container">
        {Object.keys(leagues.userleagues).length > 0 ? (
          <ul>
            {Object.keys(leagues.userleagues).map((league) => {
              return <li>{leagues.userleagues[league].name}</li>;
            })}
          </ul>
        ) : (
          <div>Join a league!</div>
        )}
        <form onSubmit={submitTeam}>
          <label>Join a league</label>
          <select
            name="leagueid"
            value={selectedLeague}
            onChange={handleChange}
          >
            <option value="">Please select a league to join</option>
            {Object.keys(leagues.otherleagues)?.length > 0 &&
              Object.keys(leagues.otherleagues).map((league) => {
                return (
                  <option value={leagues.otherleagues[league].id}>
                    {leagues.otherleagues[league].name}
                  </option>
                );
              })}
          </select>
              <br></br>
          
          
          <label>Name your team</label>
          <input
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
          
          <button id="league-submit-button" type="submit">
            Join
          </button>
        </form>
      </div>
    );
}

export default Sidebar