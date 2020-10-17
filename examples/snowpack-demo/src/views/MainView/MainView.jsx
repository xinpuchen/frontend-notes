import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';
import { Loading } from '../../components';

import './style.scss';

const MainView = ({ route }) => (
  <div className="main-view">
    <div className="btn-group">
      <NavLink to="/home" exact className="btn" activeClassName="active">
        To Home
      </NavLink>
      <NavLink to="/async" exact className="btn" activeClassName="active">
        To Async
      </NavLink>
    </div>
    <div className="view">
      <Suspense fallback={<Loading />}>{renderRoutes(route.routes)}</Suspense>
    </div>
  </div>
);

MainView.propTypes = {
  route: PropTypes.object,
};

export default MainView;
