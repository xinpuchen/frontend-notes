import React, { memo } from 'react';
import loading from '../../assets/loading.svg';

import './style.scss';

const Loading = () => {
  return (
    <div className="loading">
      <img src={loading} alt="loading" />
    </div>
  );
};

export default memo(Loading);
