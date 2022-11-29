import "../../vendor/normalize.css";
import React, { useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import Header from "../Header/Header";
import Main from "../Main/Main";

import "../App/App.css";
import Popup from "../Popup/Popup";
import Form from "../Form/Form";
import api from "../utils/api";

function App() {
  const [isPopupFeedbackOpen, setPopupFeedbackOpen] = useState(false);
  const [isSendingForm, setIsSendingForm] = useState(false);
  const [isErrorSendingForm, setIsErrorSendingForm] = useState(false);
  const [isSuccessSendingForm, setIsSuccessSendingForm] = useState(false);

  // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDyF6DacMA-m88S1cQ_H6XcY4MmL3QvtI8",
//   authDomain: "datatouch-dc097.firebaseapp.com",
//   databaseURL: "https://datatouch-dc097-default-rtdb.firebaseio.com",
//   projectId: "datatouch-dc097",
//   storageBucket: "datatouch-dc097.appspot.com",
//   messagingSenderId: "924394650423",
//   appId: "1:924394650423:web:26438558fb863b7a14b8b2"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

  const openPopupHandler = () => {
    setIsSuccessSendingForm(false);
    setPopupFeedbackOpen(true);
  };

  const closePopupsHandler = () => {
    setPopupFeedbackOpen(false);
  };

  const onSubmitHandler = ({ name, phone, email, comment }) => {
    console.log(name, phone, email, comment);
    setIsSendingForm(true);
    setIsErrorSendingForm(false);

    api
      .setFeedBack({ name, phone, email, comment })
      .then(() => {
        setIsSuccessSendingForm(true);
      })
      .catch(() => setIsErrorSendingForm(true))
      .finally(() => setIsSendingForm(false));
  };

  return (
    <div className="App">
      <Header />
      <Main onClickPromoButton={openPopupHandler} />
      <Popup isOpen={isPopupFeedbackOpen} onClose={closePopupsHandler}>
        {!isSuccessSendingForm && (
          <>
            <h2 className="title title_place_popup">DATATOUCH</h2>
            <p className="description">
              Оставьте заявку и мы обязательно Вам поможем!
            </p>
            {isErrorSendingForm && (
              <div className="error-form">
                что-то пошло не так, пожалуйста, напишите письмо на <a href="ceo@datatouch.ru" className="error-email">ceo@datatouch.ru</a>
              </div>
            )}
            <Form
              onSubmit={onSubmitHandler}
              isSending={isSendingForm}
              buttonText="СВЯЗАТЬСЯ СО МНОЙ"
              isSuccessSendingForm={isSuccessSendingForm}
            />
          </>
        )}
        {isSuccessSendingForm && (
          <div className="done-form">УЖЕ ВЫХОДИМ С ВАМИ НА СВЯЗЬ</div>
        )}
      </Popup>
    </div>
  );
}

export default App;
