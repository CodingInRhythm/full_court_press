import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { newLeague } from "../../../store/league";
import "./CreateLeagueForm.css"

const CreateLeagueForm = ({setShowModal}) => {
    
    const [leagueName, setLeagueName] = useState("");
    const [newTeamName, setNewTeamName] = useState("");
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch()

  const createLeague = (e) => {
    e.preventDefault();

    if (leagueName === "" || newTeamName === "") {
      setErrors(["Please enter both a league name and team name"]);
      return;
    }
    dispatch(newLeague(leagueName, newTeamName));
    setLeagueName("");
    setNewTeamName("");
    setShowModal(false)
  };

  return (
    <div className="newleague-container">
      {errors.length > 0 && (
        <ul>
          {errors.map((err) => (
            <li>{err}</li>
          ))}
        </ul>
      )}
      <h3>Create a League: </h3>
      <form className="create-league-form" onSubmit={createLeague}>
        <div>
          <label>League name</label>
          <input
            type="text"
            value={leagueName}
            onChange={(e) => setLeagueName(e.target.value)}
          />
        </div>
        <div>
          <label>Team name</label>
          <input
            type="text"
            value={newTeamName}
            onChange={(e) => setNewTeamName(e.target.value)}
          />
        </div>
        <button className="create-league-form-button"type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateLeagueForm