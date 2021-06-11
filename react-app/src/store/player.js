import {addToLeague} from './league'
const initialState = {}

const SET_PLAYERS = "player/GET_PLAYERS"

/*----------------------ACTIONS-----------------*/

const setPlayers = (players) => ({
    type: SET_PLAYERS,
    payload: players
})



/* --------------------THUNKS -----------------*/


export const getPlayers = () => async (dispatch) => {
    const response = await fetch(`/api/players`)
    const data = await response.json()
    dispatch(setPlayers(data.players))

    return null
}

export const addPlayer = (playerid, teamid) => async (dispatch) => {
    const response = await fetch(`/api/players/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({playerid, teamid})
    })
    const player = await response.json()
 
    dispatch((addToLeague(player, teamid)))
}
/*--------------------ADDPLAYERS-------------------*/
export default function reducer(state= initialState, action) {
    let newState;
    switch (action.type) {
        case SET_PLAYERS:
            newState = { ...state}
            action.payload.forEach((player) => {
                newState[player.id] = player
            })
            return newState
        default:
            return state
    }
}