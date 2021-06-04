import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import Sidebar from '../Sidebar'
import ContentDisplay from '../ContentDisplay'
import {getLeagues} from '../../store/league'
import "./MainInterface.css"



const MainInterface = () => {

  const userid = useSelector((state) => state.session.user.id)
  const dispatch = useDispatch()

  /* ----------------------------USEEFFECTS ---------------- */

  useEffect(() => {
    dispatch(getLeagues(userid))
  }, []);
  return (
    <>
      <div className="main_interface_container">
        <Sidebar />
        <ContentDisplay />
      </div>
    </>
  );
}

export default MainInterface