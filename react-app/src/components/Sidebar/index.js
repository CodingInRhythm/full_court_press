import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {newLeague, getCurrentLeagueData, joinLeague, setCurrentTeam, setCurrentLeague} from '../../store/league'
import {addTeam} from '../../store/team'
import { JoinLeagueModal } from './JoinLeagueForm/JoinLeagueModal'
import { CreateLeagueModal } from './CreateLeagueForm/CreateLeagueModal'


import "./Sidebar.css"
const Sidebar = ({setContent, leagues, userid}) => {

                /* useSELECTORS AND STATE VARIABLES */
  
  
  const [selectedLeague, setSelectedLeague] = useState(null)
  const [teamName, setTeamName] = useState("")
  const [leagueName, setLeagueName] = useState("")
  const [newTeamName, setNewTeamName] = useState("")
  const [errors, setErrors] = useState([])
  const teams = useSelector((state) => state.team)
  const currentleague = useSelector((state) => state.league.currentleague)
  const dispatch = useDispatch()

              /* FUNCTIONS */
  const handleChange = (e) => {
      e.preventDefault()
      setSelectedLeague(e.target.value)
  }

  const setLeague = (leagueid) => {
    console.log(leagueid)
      dispatch(getCurrentLeagueData(leagueid))
      setContent("League Display")
  }

  const createLeague = (e) => {
    e.preventDefault()

    if(leagueName === "" || newTeamName === "") {
      setErrors(["Please enter both a league name and team name"])
      return
    }
    dispatch(newLeague(leagueName, newTeamName))
    setLeagueName('')
    setNewTeamName('')
  }

  // const goToTeam = async (teamobj) => {

  //   if (currentleague.teams !== null) {
  //     dispatch(setCurrentTeam(currentleague.myteam))

  //   }
  //   else {
  //     setCurrentTeam(teamobj)
  //   }
  //   setContent("Team Display")
  // }

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
          {leagues.currentleague.name !== null && (
            <div className="current-league-container">
              <h2 className="section-header">Current League: </h2>
              <button className="current-league-button" onClick={() => setLeague(leagues.currentleague.id)}>
                {leagues.currentleague.name}
              </button>
            </div>
          )}
        {Object.keys(leagues.userleagues).length > 0 && (
          <div className="myleagues-container">
            <h2 className="section-header">My leagues: </h2>
            <ul className="league-list">
              {Object.keys(leagues.userleagues).map((leagueid) => {
                return (
                  <li className="league-li" key={leagueid}>
                    <button className="league-button" onClick={() => setLeague(leagueid)}>
                      {leagues.userleagues[leagueid].name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <div className="user-actions-container">
          {Object.keys(leagues.userleagues).length < 1 ? (
            <h2 className="section-header">Get Started!</h2>
          ) : (
            <h2 className="section-header">Keep Playing!</h2>
          )}
          {Object.keys(leagues.otherleagues).length !== 0 ? (
            <JoinLeagueModal
              setSelectedLeague={setSelectedLeague}
              otherleagues={leagues.otherleagues}
            />
          ) : (
            <p>You've joined all leagues!</p>
          )}
          <CreateLeagueModal />
        </div>
      </div>
    )
  );
}

export default Sidebar