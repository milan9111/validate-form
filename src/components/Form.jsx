import React, { useState, useEffect } from "react";

const Form = () => {
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [repeatPassword, setReapetPassword] = useState("");
  const [firstCheck, setFirstCheck] = useState(false);
  const [secondCheck, setSecondCheck] = useState(false);
  const [validate, setValidate] = useState(false);

  useEffect(() => {
    if (
      email === true &&
      password.length > 0 &&
      repeatPassword.length > 0 &&
      password === repeatPassword &&
      firstCheck === true &&
      secondCheck === true
    ) {
      setValidate(true);
    } else {
      setValidate(false);
    }
  }, [email, password, repeatPassword, firstCheck, secondCheck]);

  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  const validateEmail = (value) => {
    return EMAIL_REGEXP.test(value);
  };
  const onEmail = (event) => {
    validateEmail(event.target.value) ? setEmail(true) : setEmail(false);
  };

  const onPassword = (event) => {
    setPassword(event.target.value);
  };

  const reapetOnPassword = (event) => {
    setReapetPassword(event.target.value);
  };

  const onCheckFirst = (event) => {
    setFirstCheck(event.target.checked);
  };

  const onCheckSecond = (event) => {
    setSecondCheck(event.target.checked);
  };

  return (
    <main className="form">
      <div className="form__title title">Регистрация личного кабинета</div>
      <form action="#" className="form-box">
        <div className="form-box__email">
          <div className="form-box__text">
            E-mail<span> *</span>
          </div>
          <div>
            <input
              type="email"
              className="form-box__input"
              onChange={onEmail}
            />{" "}
          </div>
        </div>
        <div className="form-box__passwords">
          <div className="form-box__password">
            <div className="form-box__text">
              Придумайте пароль<span> *</span>
            </div>
            <div>
              <input
                type="password"
                autoComplete="on"
                className="form-box__input"
                onChange={onPassword}
              />{" "}
            </div>
          </div>
          <div className="form-box__password">
            <div className="form-box__text">
              Подтвердите пароль<span> *</span>
            </div>
            <div>
              <input
                type="password"
                autoComplete="on"
                className="form-box__input"
                onChange={reapetOnPassword}
              />
            </div>
          </div>
        </div>

        <div className="form-box__conditions">
          <label className="form-box__checkbox">
            <input type="checkbox" onClick={onCheckFirst} />Я ознакомлен с{" "}
            <span>
              <a href="/#">Условиями, положениями и рисками</a>
            </span>
          </label>
        </div>
        <div className="form-box__conditions">
          <label className="form-box__checkbox">
            <input type="checkbox" onClick={onCheckSecond} />Я ознакомлен с{" "}
            <span>
              <a href="/#">Политикой конфиденциальности</a>
            </span>
          </label>
        </div>
        <div
          className={validate ? "form-box__buttonSuccess" : "form-box__button"}
        >
          <button>Регистрация</button>
        </div>
      </form>
    </main>
  );
};

export default Form;
