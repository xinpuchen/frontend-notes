import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Hello = ({ msg }) => (
  <div className="hello">
    <h2>{msg}</h2>
  </div>
);

Hello.propTypes = {
  msg: PropTypes.string,
};

export default memo(Hello);
