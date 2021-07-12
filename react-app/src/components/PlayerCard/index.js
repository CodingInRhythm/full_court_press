import React,{useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { removePlayer, removeTeam, requestTradeThunk } from "../../store/league";
import { addPlayer } from "../../store/player";

import './PlayerCard.css'
const PlayerCard = ({player}) => {

  let teamplayers = useSelector((state) => state.league.currentleague.myteam.players)
  const currentteam = useSelector(
     (state) => state.league.currentleague.currentteam
   );
  const availableplayers = useSelector((state) => state.league.currentleague.available_players)
  const myteam = useSelector((state) => state.league.currentleague.myteam);
  const [isUserPlayer, setIsUserPlayer] = useState(false)
  const [isAvailable, setIsAvailable] = useState(false)
  const [isRequested, setIsRequested] = useState(false)
  const [selectedValue, setSelectedValue] = useState('')
  const [errors, setErrors] = useState([])
  const [requestForm, setRequestForm] = useState(false)
  const dispatch = useDispatch();
  
  const dropPlayer = () => {
  
    dispatch(removePlayer(currentteam.id, player));
    // setIsClicked(!isClicked);
    // setToggleState(!toggleState);
  };

  const addSelectedPlayer = () => {
    if (myteam.players.length > 4) {
      setErrors(["You are at maximum roster size. Please drop a player to continue."])
      return
    }
      dispatch(addPlayer(player.id, myteam.id));
    };

const initTrade = () => {
  setRequestForm(true)
  // dispatch(requestTrade(currenteam.id, player.id))
}

const cancelTrade = () => {
  setIsRequested(false);
};

const requestTrade = async(e) => {
    e.preventDefault()

    let tradeObj = {
      player_sending_id: selectedValue,
      player_receiving_id: player.id,
      recipient_team_id: currentteam.id,
      requesting_team_id: myteam.id,
    };
    dispatch(requestTradeThunk(tradeObj))
    setRequestForm(false)
    alert(`You've requested a trade!`)
    return null
};
  useEffect(() => {
    for (let i = 0; i < teamplayers.length; i++) {
      if (player.id == teamplayers[i].id) {
        setIsUserPlayer(true)
        return
      }
    }
  },[])

  useEffect(() => {
    if (player.id in availableplayers) {

      setIsAvailable(true)
    }
  }, [])

  useEffect(() => {
    for (let i = 0 ; i < myteam.made_trade_requests.length; i++){
      if (player.id === myteam.made_trade_requests[i].player_receiving.id) {
        console.log('made it')
        setIsRequested(true)
      }
      else {
      setIsRequested(false)
      }
    }
  }, [])


    return (
      <div className="player-card-container">
        <span className="name">{player.name}</span>
        <div className="position_available">
          <span className="position">Position: {player.position}</span>
          <p>
            Status:{" "}
            {isAvailable ? (
              <span className="status-text">Available</span>
            ) : (
              <span className="status-text">Taken</span>
            )}
          </p>
        </div>
        <div className="adddrop-button-container">
          {isUserPlayer ? (
            <button className="adddrop-button" onClick={dropPlayer}>
              Drop
            </button>
          ) : isAvailable ? (
            <button className="adddrop-button" onClick={addSelectedPlayer}>
              Add
            </button> ) :
          // ) : 
          isRequested ? (
            <button className="adddrop-button" onClick={cancelTrade}>
              {" "}
              Revoke Trade
            </button>
          ) : (
            <button className="adddrop-button" onClick={initTrade}>
              {" "}
              Request Trade
            </button>
          )
        // <span>Player is currently owned</span>
        }
          <ul>
            {errors.length > 0 &&
              errors.map((err) => {
                return <li className="add-error">{err}</li>;
              })}
          </ul>
          {requestForm && (
            <form onSubmit={(e) => requestTrade(e)}>
              <select value={selectedValue} onChange={((e) => setSelectedValue(e.target.value))}>
                <option value={null}>Select player to trade</option>
                {teamplayers.map((player) => {
                  return (<option key={player.id} value={player.id}>{player.name}</option>)
                })}
              </select>
              <button type="submit">Request Trade</button>
            </form>
          )}
        </div>
        <div className="player-stats">
          <span className="ppg">PPG: {player.ppg}</span>
          <span className="asts">APG: {player.assists}</span>
          <span className="rbs">RPG: {player.rebounds}</span>
        </div>
        <img className="headshotimg" src={player.photo}></img>
      </div>
    );
}

export default PlayerCard