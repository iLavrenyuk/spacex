import React from 'react';
import Logo from '../img/logo.svg';


export default function Header() {
  return (
    <header className="header">
      <img
        src={Logo}
        alt="Logo Space X"
        className="logo"
      />
      <nav className="main-nav nav">
        <ul className="list">
          <li className="item">
            <a href="index.html" className="item-link">Falcon 1</a>
          </li>
          <li className="item">
            <a href="#a" className="item-link">Falcon 9</a>
          </li>
          <li className="item">
            <a href="#b" className="item-link">Falcon Heavy</a>
          </li>
          <li className="item">
            <a href="#c" className="item-link">Updates</a>
          </li>
        </ul>
      </nav>
      <nav className="secondary-nav">
        <ul className="list">
          <li className="item">
            <a href="#a" className="item-link">Home</a>
          </li>
          <li className="item">
            <a href="calendar.html" className="item-link">Calendar</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}