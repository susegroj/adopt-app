import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { BsHouse } from 'react-icons/bs';
import { FiMessageCircle, FiHeart } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';

import './menu.scss';

const menu = [
  {
    key: 'home',
    path: '/home',
    label: 'Home',
    icon: <BsHouse className="icon" />,
  },
  {
    key: 'msgs',
    path: '/messages',
    label: 'Mensajes',
    icon: <FiMessageCircle className="icon" />,
  },
  {
    key: 'favorites',
    path: '/favorites',
    label: 'Favoritos',
    icon: <FiHeart className="icon" />,
  },
  {
    key: 'profile',
    path: '/profile',
    label: 'Perfil',
    icon: <AiOutlineUser className="icon" />,
  },
];

const Menu = ({ activeTab }) => (
  <nav className="menu">
    <h1 className="app-title">Adoptapp</h1>
    <ul className="options">
      {menu.map(({ key, path, label, icon }) => (
        <Link to={path} key={key}>
          <li className={`option ${activeTab === key ? 'active' : ''}`}>
            {icon}
            <span>{label}</span>
          </li>
        </Link>
          ))}
    </ul>
  </nav>
  );

Menu.propTypes = {
  activeTab: PropTypes.string.isRequired,
};

export default Menu;
