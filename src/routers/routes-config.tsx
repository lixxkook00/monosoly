import React, { ComponentType, lazy, LazyExoticComponent } from 'react';
import { RouteObject } from 'react-router-dom';

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
const FriendsPage = lazyWithPreload(() => import('../pages/friends'), '/images/chest.png');
const EarnPage = lazyWithPreload(() => import('../pages/earn'), '/images/token.png');
const AccountPage = lazyWithPreload(() => import('../pages/account'), '/images/token.png');
const AirdropPage = lazyWithPreload(() => import('../pages/airdrop'), '/images/token.png');
const MinePage = lazyWithPreload(() => import('../pages/mine'), '/images/token.png');
const SettingsPage = lazy(() => import('../pages/settings'));
const HomePage = lazy(() => import('../pages/home'));

const publicRoutesConfig: RouteObject = {
  path: '/',
  children: [
    {
      index: true,
      element: <HomePage />
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
    },
    {
      path: '/account',
      element: <AccountPage />
    },
    {
      path: '/settings',
      element: <SettingsPage />
    },
    {
      path: '/home',
      element: <HomePage />
    },
  ]
};

export const routesConfig: RouteObject[] = [publicRoutesConfig];
