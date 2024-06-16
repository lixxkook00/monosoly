import React, { ComponentType, lazy, LazyExoticComponent } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

const lazyWithPreload = (
  importStatement: () => Promise<{ default: ComponentType<any> }>,
  imgPath: string
): LazyExoticComponent<ComponentType<any>> => {
  const promise = Promise.all([
    importStatement(),
    new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.src = imgPath;
      img.onload = () => resolve();
      img.onerror = reject;
    }),
  ]).then(([moduleExports]) => moduleExports); // we only care about the imported module

  return React.lazy(() => promise);
};

const GamePage = lazyWithPreload(() => import('../pages/game'), '/images/map-full.png');
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
