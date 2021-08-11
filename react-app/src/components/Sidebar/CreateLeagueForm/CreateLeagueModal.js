import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import CreateLeagueForm from "./index";
import "./CreateLeagueModal.css";

export const CreateLeagueModal = ({  }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="create-league-button" onClick={() => setShowModal(true)}>
        Create League!
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateLeagueForm
            setShowModal={setShowModal}
            
          />
        </Modal>
      )}
    </>
  );
};
