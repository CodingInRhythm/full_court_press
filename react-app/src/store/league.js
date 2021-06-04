const initialState = {"userleagues": 1, "otherleagues": 2}

const SET_USERLEAGUES = "league/SET_USERLEAGUES"
const SET_OTHERLEAGUES ="league/SET_OTHERLEAGUES"
const JOIN_USERLEAGUE = "league/JOIN_USERLEAGUE"


/* -------------------------------ACTIONS---------------------------*/

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
    console.log('hererere', id)
    dispatch(joinUserLeague(id))
    return
}
/* ------------------------------REDUCER------------------------------*/
export default function reducer(state = initialState, action) {
  let newState;
    switch (action.type) {
    case SET_USERLEAGUES: 
        console.log(state)
        newState = {...state}
        console.log(newState["userleagues"])
        newState["userleagues"] = action.payload;
        return newState
    case SET_OTHERLEAGUES:
        newState= {...state}
        console.log(newState)
        newState["otherleagues"] = action.payload
        return newState
    case JOIN_USERLEAGUE:
        newState = {...state}
        let joinedLeague = newState["otherleagues"][action.payload]
        delete newState["otherleagues"][action.payload]
        newState["userleagues"][action.payload] = joinedLeague
        console.log(newState)
        // return newState
    default:
      return state;
  }
}
