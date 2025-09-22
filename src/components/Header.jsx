import React from "react";
import { Link } from 'react-router-dom';
import logo from "../assets/Logo.svg";
import avatar from "../assets/AvatarFalse.svg";
import ToggleSwitch from "./ToggleSwitch.jsx";
import "../blocks/Header.css";


const Header = ({ onClick, weatherData, menu, handleMobileMenu}) => {

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const headerDate = `${currentDate},\u00A0`;
  const userName = "Patricia Tirado";

  return (
    <header className="header">
      <div className="header__left">
        <div className="header__info">
          <Link to="/" className="header__link"><span className="header__logo">wtwr&deg;</span></Link>
          <p className="header__date">{headerDate}</p>
          <p className="header__location">{weatherData.city}</p>
        </div>
      </div>

      <div className="header__right">
        <ToggleSwitch/>
        <div className="header__user">
          <button
            type="button"
            className="header__add-btn"
            onClick={onClick}
          >
            + Add Clothes
          </button>
          <Link to="/profile" className="header__username-link">
            <p className="header__user-name">{userName}</p>
          </Link>
          <Link to="/profile" className="header__link">
            <img
              src={avatar}
              alt={`${userName}'s avatar`}
              className="header__avatar"
            />
          </Link>
        </div>
      </div>

      <div className="header__top-row">
        <div className="header__info_mobile">
          {!menu && (
            <img className="header__logo_mobile" src={logo} alt="WTWR logo" />
          )}

          <div
            className={menu ? "mobile__menu_opened" : "mobile__menu"}
            onClick={handleMobileMenu}
          >
            {!menu && (
              <div className="mobile__menu_lines-container">
                <div className="mobile__menu_line" />
                <div className="mobile__menu_line" />
              </div>
            )}
            {menu && (
              <div className="mobile__menu_content">
                  <div className="mobile__menu_btn-container">
                    <button
                      type="button"
                      className="mobile__menu_close-btn"
                      onClick={handleMobileMenu}
                    ></button>
                  </div>
              
                <div className="mobile__menu_top-row">
                  <p className="header__user-name_mobile">{userName}</p>
                  <img
                    src={avatar}
                    alt={`${userName}'s avatar`}
                    className="header__avatar_mobile"
                  />
                </div>
                <div className="mobile__menu_bottom-row">
                  <button
                    type="button"
                    className="header__add-btn_mobile"
                    onClick={onClick}
                    >+ Add Clothes
                  </button>
                </div>
                <div className="mobile__menu_last-row">
                  <ToggleSwitch/>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="header__bottom-row">
        <div className="header__date-location_mobile">
          {!menu && (
            <div className="header__date-location_mobile-content">
              <p className="header__date">{headerDate}</p>
              <p className="header__location">{weatherData.city}</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

/*
toggle-switch__mobile
toggle-switch__C--mobile
toggle-switch__F--mobile
toggle-switch__checkbox--mobile
*/

export default Header;
