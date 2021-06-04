import React from 'react'
import {useSelector} from 'react-redux'
import "./Sidebar.css"
const Sidebar = () => {

    //Will display teams under leagues
    const leagues = useSelector((state) => state.league.leagues)
    console.log(leagues)
    return (
        <div className="sidebar-container">
            {/* {Object.keys(leagues)?.length > 0 ?  (
            <ul>
                {Object.keys(leagues).map((league) => {
                   return (
                       <li>
                           {leagues[league].name}
                       </li>
                   )
                })}
            </ul>

            ) : (
                <div>Join a league!</div>
            )} */}
            <form>
                <label>Join a league</label>
                <input
                type="text"
                name=""
                
                >
                </input>
            </form>
        </div>
    )
}

export default Sidebar