import react from "react";
import './Header.css';

const Header = props => {

  return (
    <div className="Header">
      <a href="/">
        <img className='logo' alt="logo" src="https://d33wubrfki0l68.cloudfront.net/377d727c8d878832f20e08939889a58bdff0b3f2/63787/img/babel.svg"></img>
      </a>
      <div className="nav-items">
        <ul>
          <li>{'Home'}</li>
          <li>{'About Us'}</li>
          <li>{'Contact Us'}</li>
          <li>{'Cart'}</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;