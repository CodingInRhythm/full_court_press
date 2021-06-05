const initialState = {};

const SET_CURRENTTEAM = "team/SET_CURRENTTEAM"
const DROP_PLAYER = "team/REMOVE_PLAYER"

/* -------------------------------ACTIONS---------------------------*/

export const setCurrentTeam = (teamObj) => ({
  type: SET_CURRENTTEAM,
  payload: teamObj,
});

const dropPlayer = (playerid) => ({
  type: DROP_PLAYER,
  payload: {
    
    playerid
  }
})
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

export const removePlayer = (teamid, playerid) => async (dispatch) => {

    console.log('made thunk')
      fetch(`/api/teams/${teamid}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ playerid }),
      });
      dispatch(dropPlayer(playerid))
}

/* ------------------------------REDUCER------------------------------*/
export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_CURRENTTEAM:
      console.log(state);
      newState = { ...state };
      console.log(newState["userleagues"]);
      newState["currentteam"] = action.payload;
      return newState;
    case DROP_PLAYER:
      newState = { ...state };
      let droppedplayer;
      let i = 0
      console.log(newState)
      while (i < newState.currentteam.players.length) {
        if (newState.currentteam.players[i].id === action.payload.playerid) {
           newState.currentteam.players.splice(i,1)
           break;
        }
        i++;
      }
      return newState
    default:
      return state;
  }
}
