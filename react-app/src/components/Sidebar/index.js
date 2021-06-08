import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getCurrentLeagueData, joinLeague, setCurrentLeague} from '../../store/league'
import {addTeam} from '../../store/team'


import "./Sidebar.css"
const Sidebar = ({setContent, leagues, userid}) => {

                /* useSELECTORS AND STATE VARIABLES */
  
    console.log(leagues)
    const [selectedLeague, setSelectedLeague] = useState(null)
    const [teamName, setTeamName] = useState("")

    const teams = useSelector((state) => state.team)

    const dispatch = useDispatch()

                /* FUNCTIONS */
    const handleChange = (e) => {
        e.preventDefault()
        setSelectedLeague(e.target.value)
    }

    const setLeague = (leagueid) => {
        dispatch(getCurrentLeagueData(leagueid))
        setContent("League Display")
    }

    const goToTeam = () => {
      console.log("here?")
      dispatch(addTeam())
    }
    const submitTeam = (e) => {
        e.preventDefault()
        dispatch(joinLeague(selectedLeague))
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
       setTeamName('')
    }    
    return (
      Object.keys(leagues).length > 0 && (
        <div className="sidebar-container">
          {leagues.currentleague.id && (
            <div>
              <h2>Current League: </h2>
              <button onClick={() => setLeague(leagues.currentleague.id)}>
                {leagues.currentleague.name}
              </button>
            </div>
          )}
          {Object.keys(leagues.userleagues).length > 0 && (
            <>
              <h1>My leagues</h1>
              <ul>
                {Object.keys(leagues.userleagues).map((leagueid) => {
                  return (
                    <li key={leagueid}>
                      <button onClick={() => setLeague(leagueid)}>
                        {leagues.userleagues[leagueid].name}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <h1>My teams</h1>
              <ul>
                {Object.keys(teams).length > 0 && Object.keys(teams.myteams).map((teamid) => {
                  return (
                    <li key={teamid}>
                      <button onClick={() => goToTeam(teamid)}>
                        {teams.myteams[teamid].name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
          {Object.keys(leagues.otherleagues).length !== 0 ? (
            <form onSubmit={submitTeam}>
              <label>Join a league</label>
              <select
                name="leagueid"
                value={selectedLeague}
                onChange={handleChange}
              >
                <option value="">Please select a league to join</option>
                {Object.keys(leagues.otherleagues).map((leagueid) => {
                  return (
                    <option
                      key={leagueid}
                      value={leagues.otherleagues[leagueid].id}
                    >
                      {leagues.otherleagues[leagueid].name}
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
          ) : (
            <p>You've joined all leagues!</p>
          )}
        </div>
      )
    );
}

export default Sidebar