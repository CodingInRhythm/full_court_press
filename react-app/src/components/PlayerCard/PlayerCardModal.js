import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import PlayerCard from "./index";

export const PlayerCardModal = ({player}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Get Player Card</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <PlayerCard player={player}/>
        </Modal>
      )}
    </>
  );
};

