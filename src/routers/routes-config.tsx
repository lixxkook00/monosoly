import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

const GamePage = lazy(() => import('../pages/game'));
const FriendsPage = lazy(() => import('../pages/friends'));
const EarnPage = lazy(() => import('../pages/earn'));
const AirdropPage = lazy(() => import('../pages/airdrop'));
const MinePage = lazy(() => import('../pages/mine'));

const publicRoutesConfig: RouteObject = {
  path: '/',
  children: [
    {
      index: true,
      element: <Navigate to="/game" />
    },
    {
      path: '/game',
      element: <GamePage />
    },
    {
      path: '/friends',
      element: <FriendsPage />
    },
    {
      path: '/earn',
      element: <EarnPage />
    },
    {
      path: '/airdrop',
      element: <AirdropPage />
    },
    {
      path: '/mine',
      element: <MinePage />
    }
  ]
};

export const routesConfig: RouteObject[] = [publicRoutesConfig];
