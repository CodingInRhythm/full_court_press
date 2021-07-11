
const SET_CURRENTLEAGUE = "league/SET_USERLEAGUE"
const SET_USERLEAGUES = "league/SET_USERLEAGUES"
const SET_OTHERLEAGUES ="league/SET_OTHERLEAGUES"
const JOIN_USERLEAGUE = "league/JOIN_USERLEAGUE"
const ADD_TO_LEAGUE = "league/ADD_TO_LEAGUE"
const ADD_TO_USER_LEAGUES = "league/ADD_TO_USER_LEAGUES"
const REMOVE_FROM_LEAGUE = "league/REMOVE_FROM_LEAGUE"
const DELETE_TEAM = "league/DELETE_TEAM"
const DELETE_LEAGUE = "league/DELETE_LEAGUE"
const ADD_TO_TEAM = "league/ADD_TO_TEAM";
const SET_MYTEAM = "league/SET_MYTEAM";
const SET_CURRENTTEAM = "league/SET_CURRENTTEAM";

/* -------------------------------ACTIONS---------------------------*/

export const setCurrentLeague = (leagueobj) => ({
    type: SET_CURRENTLEAGUE,
    payload: leagueobj
})

const setUserLeagues = (leagues) => ({
    type: SET_USERLEAGUES,
    payload: leagues
})

const setOtherLeagues = (leagues) => ({
    type: SET_OTHERLEAGUES,
    payload: leagues
})

const joinUserLeague = (otherleagueid) => ({
    type: JOIN_USERLEAGUE,
    payload: otherleagueid
})

export const addToLeague = (playerobj, teamid) => ({
    type: ADD_TO_LEAGUE,
    payload: {
      playerobj,
      teamid
    }
  })
const addToUserLeagues = (leagueobj) => ({
  type: ADD_TO_USER_LEAGUES,
  payload: leagueobj
})
export const addToTeam = (playerObj) => ({
  type: ADD_TO_TEAM,
  payload: playerObj,
});

export const removeFromLeague = (playerobj) => ({
    type: REMOVE_FROM_LEAGUE,
    payload: playerobj
})

export const setMyTeam = (teamObj) => ({
  type: SET_MYTEAM,
  payload: teamObj,
});

export const setCurrentTeam = (teamObj) => ({
  type: SET_CURRENTTEAM,
  payload: teamObj,
});

const deleteTeam = (teamid) => ({
  type: DELETE_TEAM,
  payload: teamid
})

const deleteLeague = (leagueid) => ({
  type: DELETE_LEAGUE,
  payload: leagueid
})
/* ------------------------------THUNKS------------------------------*/

export const getLeagues = (id) => async (dispatch) => {
    const response = await fetch(`/api/leagues/me`);

    const data = await response.json()

    const userleagues = {}
  
    data.leagues.forEach((league) => {
        userleagues[league.id] = league
       
    })

    dispatch(setUserLeagues(userleagues))

    const otherleagues = {}
    data.other_leagues.forEach((league) => {
        
        otherleagues[league.id] = league
    })

    dispatch(setOtherLeagues(otherleagues))
}

export const joinLeague = (id) => async (dispatch) => {
    
    dispatch(joinUserLeague(id))

    let res = await fetch(`/api/users/joinleague/${id}`)
    return
}

export const getCurrentLeagueData = (id) => async (dispatch) => {
  const res = await fetch(`/api/leagues/${id}`)
  const {league, myteam} = await res.json()
  console.log(myteam)
  const playerobj = {}
  league.available_players.forEach((player) => {
    playerobj[player.id] = player
  })
  league.available_players = playerobj
  league.myteam = myteam

  dispatch(setCurrentLeague(league))
}

export const removePlayer = (teamid, playerobj) => async (dispatch) => {
  fetch(`/api/teams/${teamid}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ playerid: playerobj.id }),
  });

  dispatch(removeFromLeague(playerobj));
};

export const newLeague = (leagueName, newTeamName) => async(dispatch) => {
  const res = await fetch('/api/leagues/create', {
    method: "POST",
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({leagueName, newTeamName})
  })
  const {league} = await res.json()
  dispatch(addToUserLeagues(league))
}

export const removeLeague = (leagueid) => async(dispatch) => {
  fetch(`/api/leagues/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({leagueid})
  })
  dispatch(deleteLeague(leagueid))
}

export const removeTeam = (teamid) => async(dispatch) => {
  fetch(`/api/teams/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ teamid }),
  });
  dispatch(deleteTeam(teamid))
}

export const acceptTradeThunk = (idObj) => async(dispatch) => {
  let res= await fetch(`/api/traderequests/`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(idObj)
  })
  let data = await res.json()
  console.log(data)
}

export const rejectTradeThunk = (id) => async (dispatch) => {
  let res = await fetch(`/api/traderequests/`, {
    method: 'DELETE',
    headers: {
      "Content-Type": 'application/json',
    },
      body: JSON.stringify({id})
  })
  let data = await res.json()
  console.log(data)
}
/* -------------------------REDUCER -------------------------*/
const initialState = {
    currentleague: {
        players: null,
        available_players: null,
        teams: null,
        name: null
    },
    userleagues: {

    },
    otherleagues: {

    }};

export default function reducer(state = initialState, action) {
  let newState;
    switch (action.type) {
      case SET_CURRENTLEAGUE:
       console.log('here?')
        return { ...state, currentleague: action.payload };
      case SET_CURRENTTEAM:
        newState = { ...state };
        newState.currentleague.currentteam = action.payload;
        return newState
      case SET_USERLEAGUES:
        newState = { ...state };
        newState["userleagues"] = action.payload;
        return newState;
      case SET_OTHERLEAGUES:
        newState = { ...state };
        newState["otherleagues"] = action.payload;
        return newState;
      case JOIN_USERLEAGUE:
        newState = { ...state };
        let joinedLeague = newState["otherleagues"][action.payload];
        delete newState["otherleagues"][action.payload];
        newState["userleagues"][action.payload] = joinedLeague;
        return newState;
      case ADD_TO_LEAGUE:
        newState = { ...state };
        newState.currentleague.teams.forEach((team, i) => {
          if (team.id === action.payload.teamid) {
            newState.currentleague.teams[i].players.push(action.payload.playerobj)
          }
        })
        newState.currentleague.available_players = {
          ...state.currentleague.available_players,
        };
        // newState.currentleague.teams
        delete newState.currentleague.available_players[action.payload.playerobj.id];
        newState.currentleague.myteam.players.push(action.payload.playerobj);
        return newState;
      case ADD_TO_USER_LEAGUES:
        newState ={ ...state};
        newState.userleagues[action.payload.id] = action.payload
        return newState
      case REMOVE_FROM_LEAGUE:
        newState = {
          ...state,
          currentleague: {
            ...state.currentleague,
            players: [...state.currentleague.players],
          },
        };

        let updatedplayers = newState.currentleague.myteam.players.filter(
          (player) => player.id !== action.payload.id
        );
        newState.currentleague.myteam.players = updatedplayers;
        newState.currentleague.currentteam.players = updatedplayers
        newState.currentleague.available_players[action.payload.id] =
          action.payload;
        return newState;
      case SET_MYTEAM:
        newState = { ...state };
        newState.currentleague.myteam = action.payload;
        return newState;
      // case ADD_TO_TEAM:
      //   newState = { ...state };

      //   delete newState.currentleague.available_players[action.payload.id]
      // return newState;
      case DELETE_TEAM:
        newState = { ...state}
        let updatedcurrentteams = newState.currentleague.teams.filter((team) => {
          return team.id !== action.payload 
        })
        newState.currentleague.teams = updatedcurrentteams
        // newState.otherleagues.teams[newState.currentleague.myteam.id] =
        // newState.currentleague.myteam
        let league = newState.currentleague
        delete newState.userleagues[league.id]
        newState.otherleagues[league.id] = league
        // newState.currentleague.name = null
        // console.log(newState.otherleagues[league.id]);
        delete newState.currentleague.myteam
        return newState
      case DELETE_LEAGUE:
        newState = { ...state}
        delete newState.userleagues[action.payload]
        newState.currentleague.name = null
        return newState
      default:
        return state;
    }
}
