import {removeFromLeague} from './league'

const initialState = {myteams: {}};


const DROP_PLAYER = "team/REMOVE_PLAYER"
const SET_MYTEAM = "team/SET_MYTEAM"
const SET_TEAMS = "team/SET_TEAMS"


/* -------------------------------ACTIONS---------------------------*/

// export const setCurrentTeam = (teamObj) => ({
//   type: SET_CURRENTTEAM,
//   payload: teamObj,
// });

// const dropPlayer = (playerid) => ({
//   type: DROP_PLAYER,
//   payload: {
    
//     playerid
//   }
// })

export const setMyTeam = (teamObj) => ({
  type: SET_MYTEAM,
  payload: teamObj
})

export const setTeams = (array) => ({
  type: SET_TEAMS,
  payload: array
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

export const getTeams = (userid) => async(dispatch) => {

  const res = await fetch('/api/users/teams')
  const {teams} = await res.json()
  dispatch(setTeams(teams))
  console.log(teams)
}

/* ------------------------------REDUCER------------------------------*/
export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_TEAMS:
      newState = {...state}
      action.payload.forEach((team) => {
        newState.myteams[team.id] = team
      })
      return newState
  //   case SET_CURRENTTEAM:
  //     console.log(state);
  //     newState = { ...state };
  //     console.log(newState["userleagues"]);
  //     newState["currentteam"] = action.payload;
  //     return newState;
    // case DROP_PLAYER:
    //   newState = { ...state };
    //   let droppedplayer;
    //   let i = 0
    //   console.log(newState)
    //   while (i < newState.currentteam.players.length) {
    //     if (newState.currentteam.players[i].id === action.payload.playerid) {
    //        newState.currentteam.players.splice(i,1)
    //        break;
    //     }
    //     i++;
    //   }
    //   return newState
    // case SET_MYTEAM:
    //   newState = { ...state};
    //   newState["myteam"] = action.payload
    //   return newState
    
    default:
      return state;
  }
}
