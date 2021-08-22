import React from 'react';
import PropTypes from 'prop-types';

import './loader.scss';
import loader from '../../assets/images/loader.png';

const Loader = ({ label, size }) => (
  <div className="loader">
    <img className={`loader-img ${size}`} src={loader} alt="loader" />
    {label && <p>{label}</p>}
  </div>
  );

Loader.propTypes = {
  label: PropTypes.string,
  size: PropTypes.string,
};

Loader.defaultProps = {
  label: '',
  size: 'm',
};

export default Loader;
