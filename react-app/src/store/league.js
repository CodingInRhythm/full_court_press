
const SET_CURRENTLEAGUE = "league/SET_USERLEAGUE"
const SET_USERLEAGUES = "league/SET_USERLEAGUES"
const SET_OTHERLEAGUES ="league/SET_OTHERLEAGUES"
const JOIN_USERLEAGUE = "league/JOIN_USERLEAGUE"
const ADD_TO_LEAGUE = "league/ADD_TO_LEAGUE"
const REMOVE_FROM_LEAGUE = "league/REMOVE_FROM_LEAGUE"
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

export const addToLeague = (playerobj) => ({
    type: ADD_TO_LEAGUE,
    payload: playerobj,
})

export const addToTeam = (playerObj) => ({
  type: ADD_TO_TEAM,
  payload: playerObj,
});

export const removeFromLeague = (playerid) => ({
    type: REMOVE_FROM_LEAGUE,
    payload: playerid
})

export const setMyTeam = (teamObj) => ({
  type: SET_MYTEAM,
  payload: teamObj,
});

export const setCurrentTeam = (teamObj) => ({
  type: SET_CURRENTTEAM,
  payload: teamObj,
});

/* ------------------------------THUNKS------------------------------*/

export const getLeagues = (id) => async (dispatch) => {
    const response = await fetch(`/api/leagues/me`);

    const data = await response.json()
    console.log(data)
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
  const playerobj = {}
  league.available_players.forEach((player) => {
    playerobj[player.id] = player
  })
  league.available_players = playerobj
  league.myteam = myteam
  console.log(league.myteam)
  dispatch(setCurrentLeague(league))
}

export const removePlayer = (teamid, playerobj) => async (dispatch) => {
  console.log("made thunk");
  fetch(`/api/teams/${teamid}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ playerid: playerobj.id }),
  });
  // dispatch(dropPlayer(playerid));
  dispatch(removeFromLeague(playerobj));
};
const initialState = {
    currentleague: {
        players: null,
        available_players: null,
        teams: null
    },
    userleagues: {

    },
    otherleagues: {

    }};


/* ------------------------------REDUCER------------------------------*/
export default function reducer(state = initialState, action) {
  let newState;
    switch (action.type) {
      case SET_CURRENTLEAGUE:
        console.log(1);
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
        newState.currentleague.available_players = {
          ...state.currentleague.available_players,
        };
        newState.currentleague.myteam.players.push(action.payload);
        delete newState.currentleague.available_players[action.payload.id];
        return newState;
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
      default:
        return state;
    }
}
