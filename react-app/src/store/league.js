const initialState = {}



/* ------------------------------THUNKS------------------------------*/

export const getLeagues = () => async (dispatch) => {
    const response = await fetch('/api/leagues');

    const data = await response.json()
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
