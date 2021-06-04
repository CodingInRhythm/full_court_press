const initialState = {"userleagues": 1, "otherleagues": null}

const SET_USERLEAGUES = "league/SET_USERLEAGUES"
const SET_OTHERLEAGUES ="league/SET_OTHERLEAGUES"


const setUserLeagues = (leagues) => ({
    type: SET_USERLEAGUES,
    payload: leagues
})

const setOtherLeagues = (leagues) => ({
    type: SET_OTHERLEAGUES,
    payload: leagues
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
    default:
      return state;
  }
}
