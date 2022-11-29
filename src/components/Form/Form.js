import React, { useEffect } from "react";
import "../Form/Form.css";

function Form({ onSubmit, buttonText, isSendingForm, isSuccessSendingForm }) {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [comment, setComment] = React.useState("");

const [emailDirty, setEmailDirty] = React.useState(false);
const [emailError, setEmailError] = React.useState("Email не может быть пустым");

const [phoneDirty, setPhoneDirty] = React.useState(false);
const [phoneError, setPhoneError] = React.useState("Phone не может быть пустым");

const [formValid, setFormValid] = React.useState(false);

// useEffect((e) => {
//   if (isSuccessSendingForm) {
//     // setName("");
//     // setPhone("");
//     // setEmail("");
//     // setComment("");
//     e.target.reset();
// }, [name, phone, email, comment]);

useEffect(() => {
    if (emailError || phoneError) {
        setFormValid(false);
    } else {
        setFormValid(true);
    }
}, [emailError, phoneError]);

const blurHandler = (e) => {
    switch (e.target.name) {
        case "email":
            setEmailDirty(true);
            break;
        case "phone":
            setPhoneDirty(true);
            break;
    }
}

const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
        setEmailError("Некорректный Email");
    } else {
        setEmailError("");
    }
}

const phoneHandler = (e) => {
    setPhone(e.target.value)
    if (e.target.value.length < 4 || e.target.value.length > 20) {
        setPhoneError("Некорректный номер телефона");
        if (!e.target.value) {
            setPhoneError("Phone не может быть пустым")
        }
    } else {
        setPhoneError("");
    }
}


  function changeNameHandler(event) {
    setName(event.target.value);
  }

  function changePhoneHandler(event) {
    setPhone(event.target.value);
  }

  function changeEmailHandler(event) {
    setEmail(event.target.value);
  }

  function changeCommentHandler(event) {
    setComment(event.target.value);
  }

  function onSubmitHandler(event) {
    event.preventDefault();

    onSubmit({ name, phone, email, comment });
    // event.target.reset();
  }

  return (
    <>
      <form
        className="form form-edit"
        name={`form`}
        noValidate
        onSubmit={onSubmitHandler}
        id="contactForm"
      >
        <fieldset className="form__contact-info">
          <input
            type="text"
            id="input-title"
            className="form__info form__info_type_title"
            onChange={changeNameHandler}
            name="name"
            value={name || ""}
            minLength="2"
            maxLength="30"
            placeholder="Имя"
            autoComplete="off"
          />
          {/* <span className="form__input-error input-title-error">
            Данное поле должно быть заполнено 
          </span> */}
          <input
            type="number"
            id="input-title"
            className="form__info form__info_type_title"
            // onChange={changePhoneHandler}
            onChange={e => phoneHandler(e)}
            onBlur={e => blurHandler(e)}
            name="phone"
            value={phone}
            // value={phone || ""}
            // min="2"
            // max="20"
            placeholder="Ваш телефон"
            autoComplete="off"
            required
          />
          {/* <span className="form__input-error input-title-error">
            Данное поле должно быть заполнено 
          </span> */}
          {(phoneError && phoneDirty) && <div className="form__valid-error">{phoneError}</div>}

          <input
            type="email"
            onChange={e => emailHandler(e)}
            onBlur={e => blurHandler(e)}
            id="input-link"
            className="form__info form__info_type_link"
            // onChange={changeEmailHandler}
            name="email"
            value={email}
            // value={email || ""}
            placeholder="E-mail"
            autoComplete="off"
            required
          />
          {(emailDirty && emailError) && <div className="form__valid-error">{emailError}</div>}
          {/* <span className="form__input-error input-link-error">
            Пожалуйста, введите корректный email-адрес 
          </span> */}
          <input
            type="text"
            id="input-link"
            className="form__info form__info_type_comment"
            onChange={changeCommentHandler}
            name="comment"
            value={comment || ""}
            placeholder="Ваш коментарий"
            autoComplete="off"
          />
          {/* <span className="form__input-error input-link-error">
            Данное поле должно быть заполнено 
          </span> */}
          <button
            type="submit"
            className="form__button form__button-submit"
            name="submit"
            disabled={!formValid}
            // disabled={isSendingForm}
          >
            {isSendingForm ? buttonText + "..." : buttonText}
          </button>
        </fieldset>
      </form>
    </>
  );
}

export default Form;
