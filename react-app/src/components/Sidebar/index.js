import React from 'react'
import {useSelector} from 'react-redux'
import "./Sidebar.css"
const Sidebar = () => {

    //Will display teams under leagues
    const leagues = useSelector((state) => state.league)
    console.log(leagues)
    return (
        <div className="sidebar-container">
            {Object.keys(leagues.userleagues).length > 0 ?  (
            <ul>
                {Object.keys(leagues.userleagues).map((league) => {
                   return (
                       <li>
                           {leagues.userleagues[league].name}
                       </li>
                   )
                })}
            </ul>

            ) : (
                <div>Join a league!</div>
            )}
            <form>
                <label>Join a league</label>
                <select name="name">
                    {Object.keys(leagues.otherleagues)?.length > 0 && 
                    Object.keys(leagues.otherleagues).map((league) => {
                        return (<option>{leagues.otherleagues[league].name}</option>)
                    })}
                </select>
            </form>
        </div>
    )
}

export default Sidebar