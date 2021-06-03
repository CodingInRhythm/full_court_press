import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import Sidebar from '../Sidebar'
import {getLeagues} from '../../store/league'
import "./MainInterface.css"



const MainInterface = () => {
  const dispatch = useDispatch()

  /* ----------------------------USEEFFECTS ---------------- */

  useEffect(() => {
    dispatch(getLeagues())
  }, []);
  return (
    <>
      <div className="main_interface_container">
        <Sidebar />
      </div>
    </>
  );
}

export default MainInterface