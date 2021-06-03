const initialState = {}

const SET_LEAGUE = "league/SET_LEAGUE"

/* ------------------------------THUNKS------------------------------*/

export const getLeagues = () => async (dispatch) => {
    const response = await fetch('/api/leagues');

    const data = await response.json()

    console.log(data)
}
/* ------------------------------REDUCER------------------------------*/
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_LEAGUE:
      return { user: action.payload };

    default:
      return state;
  }
}
