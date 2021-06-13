import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { joinLeague } from "../../../store/league";
import { addTeam } from "../../../store/team";
import './JoinLeagueForm.css'

const JoinLeagueForm = ({setShowModal, otherleagues}) => {

    const [selectedLeague, setSelectedLeague] = useState(null);
    const [teamName, setTeamName] = useState("");
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();

    const userid = useSelector((state) => state.session.user.id)
 
    const submitTeam = (e) => {
    e.preventDefault();
    if (!selectedLeague || teamName === "") {
        setErrors(["Please select a league and enter a team name."])
        return;
    }
    dispatch(joinLeague(selectedLeague));
    /*When we submit a league to join going to have to do a few things:
        If there is room in the league, need to make a team name and check whether that team
        name is taken.
        Then we need to add the team to that league in both dB and the store.  
        Also need to make sure leagues with max members are not shown. 
        */
    dispatch(
        addTeam({
        name: teamName,
        user_id: userid,
        league_id: selectedLeague,
        })
    );
    setTeamName("");
    setShowModal(false)
    };

    const handleChange = (e) => {
        e.preventDefault();
        setSelectedLeague(e.target.value);
    };

    return (
        <form onSubmit={submitTeam}>
        {errors.length > 0 && (
            <ul>
            {errors.map((err) => (
                <li key={err}>{err}</li>
            ))}
            </ul>
        )}
        <div className={"join-league-container"}>
            <label>Join a league</label>
            <select name="leagueid" value="" onChange={handleChange}>
            <option value="">Please select a league to join</option>
            {Object.keys(otherleagues).map((leagueid) => {
                return (
                <option key={leagueid} value={otherleagues[leagueid].id}>
                    {otherleagues[leagueid].name}
                </option>
                );
            })}
            </select>
        </div>
        <label>Name your team</label>
        <input
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
        />

        <button className="league-submit-button" type="submit">
            Join
        </button>
        </form>
    );
};

export default JoinLeagueForm