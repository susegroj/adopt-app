import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Menu, Footer } from '../index';

import './layout.scss';

const Layout = ({ children, activeTab }) => {
  useEffect(() => {
    if (window) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="app">
      <div className="page-content">
        {children}
        <Menu activeTab={activeTab} />
        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  activeTab: PropTypes.string.isRequired,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
