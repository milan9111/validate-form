import React from "react";
import "./../styles/styles.css";
import avatar from "./../sources/images/avatar.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo logo">
        <a href="logo">ТЕСТ</a>
      </div>
      <nav className="header__nav nav">
        <ul>
          {/* Когда есть куда переходить, необходимо применять Link или NavLink */}
          <li>
            <a href="/#">КЛУБ</a>
          </li>
          <li>
            <a href="/#">БАЗА ЗНАНИЙ</a>
          </li>
          <li>
            <a href="/#">ИНСТРУМЕНТЫ</a>
          </li>
        </ul>
      </nav>
      <div className="header__auth auth">
        <div className="auth__avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="auth__enter">
          <a href="/#">ВХОД</a>
        </div>
        <div className="auth__registration">
          <button>РЕГИСТРАЦИЯ</button>
        </div>
        <div className="auth__lang">
          <button>RU</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
