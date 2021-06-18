import React,{useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { removePlayer, removeTeam } from "../../store/league";
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
  const [errors, setErrors] = useState([])
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

const requestTrade = () => {
  setIsRequested(true)
}

const revokeTrade = () => {
  setIsRequested(false);
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
            <button className="adddrop-button" onClick={revokeTrade}>
              {" "}
              Revoke Trade
            </button>
          ) : (
            <button className="adddrop-button" onClick={requestTrade}>
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