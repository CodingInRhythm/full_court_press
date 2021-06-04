const initialState = {};



/* -------------------------------ACTIONS---------------------------*/

// const setUserLeagues = (leagues) => ({
//   type: SET_USERLEAGUES,
//   payload: leagues,
// });


/* ------------------------------THUNKS------------------------------*/

// export const getLeagues = (id) => async (dispatch) => {
//   const response = await fetch(`/api/leagues/${id}`);

//   const data = await response.json();

//   const userleagues = {};
//   console.log(data);
//   data.leagues.forEach((league) => {
//     userleagues[league.id] = league;
//   });

//   dispatch(setUserLeagues(userleagues));

//   const otherleagues = {};
//   data.other_leagues.forEach((league) => {
//     otherleagues[league.id] = league;
//   });

//   dispatch(setOtherLeagues(otherleagues));
// };

export const addTeam = (teamObj) => async (dispatch) => {
    console.log(teamObj)
    const response = await fetch('/api/teams/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(teamObj)
    })
}

/* ------------------------------REDUCER------------------------------*/
export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
//     case SET_USERLEAGUES:
//       console.log(state);
//       newState = { ...state };
//       console.log(newState["userleagues"]);
//       newState["userleagues"] = action.payload;
//       return newState;
//     case SET_OTHERLEAGUES:
//       newState = { ...state };
//       console.log(newState);
//       newState["otherleagues"] = action.payload;
//       return newState;
//     case JOIN_USERLEAGUE:
//       newState = { ...state };
//       let joinedLeague = newState["otherleagues"][action.payload];
//       delete newState["otherleagues"][action.payload];
//       newState["userleagues"][action.payload] = joinedLeague;
//       console.log(newState);
    // return newState
    default:
      return state;
  }
}
