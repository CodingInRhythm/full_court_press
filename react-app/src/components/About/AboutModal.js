import React from 'react'
import { Modal } from "../../context/Modal"
import { useState } from 'react'
import About from './index'
export const AboutModal = () => {

    const [ showAbout, setShowAbout ] = useState(false)
    return (
        <>
            <button className="show-about" onClick={() => setShowAbout(true)}>About</button>
            {showAbout && (
                <Modal onClose={() => setShowAbout(false)}>
                    <About show={setShowAbout}/>
                </Modal>
            )}
        </>
    )
}