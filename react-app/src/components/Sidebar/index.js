import React from 'react'
import {useSelector} from 'react-redux'
import "./Sidebar.css"
const Sidebar = () => {


    const leagues = useSelector((state) => state.league)
    console.log(leagues)
    return (
        <div className="sidebar-container">
            {Object.keys(leagues).length > 0 ?  (
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
            )}
        </div>
    )
}

export default Sidebar