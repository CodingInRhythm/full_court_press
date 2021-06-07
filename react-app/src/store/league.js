
const SET_CURRENTLEAGUE = "league/SET_USERLEAGUE"
const SET_USERLEAGUES = "league/SET_USERLEAGUES"
const SET_OTHERLEAGUES ="league/SET_OTHERLEAGUES"
const JOIN_USERLEAGUE = "league/JOIN_USERLEAGUE"
const ADD_TO_LEAGUE = "league/ADD_TO_LEAGUE"
const REMOVE_FROM_LEAGUE = "league/REMOVE_FROM_LEAGUE"

/* -------------------------------ACTIONS---------------------------*/

export const setCurrentLeague = (id) => ({
    type: SET_CURRENTLEAGUE,
    payload: id
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

export const removeFromLeague = (playerid) => ({
    type: REMOVE_FROM_LEAGUE,
    payload: playerid
})
/* ------------------------------THUNKS------------------------------*/

export const getLeagues = (id) => async (dispatch) => {
    const response = await fetch(`/api/leagues/${id}`);

    const data = await response.json()

    const userleagues = {}
    console.log(data)
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

const initialState = {
    currentleague: {
        players: null
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
        newState = { ...state };
        console.log(action.payload);
        let currentleague = newState["userleagues"][action.payload];
        newState["currentleague"] = currentleague;
        return newState;
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
      case ADD_TO_LEAGUE:
        newState = {
          ...state,
          currentleague: {
            ...state.currentleague,
            players: [...state.currentleague.players],
          },
        };
        newState.currentleague.players[action.payload.player.id - 1] =
          action.payload.player;
        return newState;
      case REMOVE_FROM_LEAGUE:
        newState = {
          ...state,
          currentleague: {
            ...state.currentleague,
            players: [...state.currentleague.players],
          },
        };
        delete newState.currentleague.players[action.payload.playerid - 1] 
        return newState;
      default:
        return state;
    }
}
