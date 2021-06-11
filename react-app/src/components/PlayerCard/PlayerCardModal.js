import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import PlayerCard from "./index";

export const PlayerCardModal = ({player}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="get-player-card" onClick={() => setShowModal(true)}>Player Card</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <PlayerCard player={player}/>
        </Modal>
      )}
    </>
  );
};

