import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

const GamePage = lazy(() => import('../pages/game'));

const publicRoutesConfig: RouteObject = {
  path: '/',
  children: [
    {
      index: true,
      element: <Navigate to='/game' />
    },
    {
      path: '/game',
      element: <GamePage />
    },
  ]
};

export const routesConfig: RouteObject[] = [publicRoutesConfig];
