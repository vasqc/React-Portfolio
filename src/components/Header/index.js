import React from 'react';
import coverImage from '../../assets/cover/coding.png';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Christian Vasquez</h1>
      <img src={coverImage} alt="Full Stack Developer"></img>
      {props.children}
    </header>
  );
}

export default Header;