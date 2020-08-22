import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Basket } from './Basket/Basket';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Header() {
  return (
    <header className="app-header">
      <Link to="/">
        <FontAwesomeIcon className="go-home-icon" icon={faHome} />
      </Link>
      <Basket />
    </header>
  );
}
