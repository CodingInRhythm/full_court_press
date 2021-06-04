const initialState = {}

const SET_LEAGUE = "league/SET_LEAGUE"


const setLeague = (leagues) => ({
    type: SET_LEAGUE,
    payload: leagues
})
/* ------------------------------THUNKS------------------------------*/

export const getLeagues = (id) => async (dispatch) => {
    const response = await fetch(`/api/leagues/${id}`);

    const data = await response.json()

    const dataobj = {}
    console.log(data)
    data.leagues.forEach((league) => {
        dataobj[league.id] = league
    })

    dispatch(setLeague(dataobj))
}
/* ------------------------------REDUCER------------------------------*/
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_LEAGUE:
        
      return action.payload;

    default:
      return state;
  }
}
