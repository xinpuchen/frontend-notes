/* eslint-disable react/jsx-filename-extension */
import React, { lazy } from 'react';
import { Redirect } from 'react-router';

import MainView from '../views/MainView';

const resolve = (path) =>
  lazy(() =>
    import(
      /* webpackChunkName: "[request]" */
      `../views/${path}.js`
    ),
  );

const redirect = (path) => () => <Redirect to={path} />;

export default [
  {
    component: MainView,
    routes: [
      { path: '/', exact: true, component: redirect('/home') },
      {
        path: '/home',
        exact: true,
        component: resolve('HomeView'),
      },
      {
        path: '/async',
        exact: true,
        component: resolve('AsyncView'),
      },
      { path: '/404', component: resolve('PageNotFound') },
      { component: redirect('/404') },
    ],
  },
];
