import React, { useContext, useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

//React Modal Context
const ModalContext = React.createContext();

//Component that renders ModalContext.Provider with all children from the props as child
//We import this in our root file to render to the DOM as parent of App.
//Since it returns two children divs (ModalContext.Provider and a div with a ref), we'll use that
//2nd div to 
export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, []);

  return (
    <>
      <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

//Modal is component that consumes ModalContext creates Portal to outside DOM Node

export function Modal({ onClose, children }) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  //createPortal takes in two arguments, the child (ele, string, fragment) to render and container, aka DOM element
  return ReactDOM.createPortal(
    <div id="modal">
      <div id="modal-background" onClick={onClose} />
      <div id="modal-content">{children}</div>
    </div>,
    modalNode
  );
}
