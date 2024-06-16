import { AnimatePresence } from 'framer-motion';
import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import { Loading } from '../components';
import { routesConfig } from './routes-config';

const AppRoutes = () => {
  const routes = useRoutes(routesConfig);

  return (
    <Suspense fallback={<Loading />}>
      <AnimatePresence>
          {routes}
      </AnimatePresence>
    </Suspense>
  );
};

export default AppRoutes;
