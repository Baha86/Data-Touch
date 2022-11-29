import React from "react";
import "../Popup/Popup.css";

function Popup({isOpen, onClose, children}) {
  return (
    <div className={`popup blur ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button onClick={() => onClose()} type="button" className="popup__button" aria-label="Закрыть" title="Закрыть" ></button>
        {children}
      </div>
    </div>
  );
}

export default Popup;
