import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import JoinLeagueForm from "./index";
import "./JoinLeagueModal.css"

export const JoinLeagueModal = ({otherleagues}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="join-league-button" onClick={() => setShowModal(true)}>
        Join League!
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <JoinLeagueForm  setShowModal={setShowModal} otherleagues={otherleagues}/>
        </Modal>
      )}
    </>
  );
};
