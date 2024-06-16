import { BrowserRouter as Router } from 'react-router-dom';

import { MenuBar } from './components';
import AppRoutes from './routers/routes';
import Modal from './components/common/modal';
import { DailyTaskModal, TeleTaskModal } from './pages/earn/components';

function App() {
  return (
    <div id="app">
      <Router>
        <AppRoutes />
        
        <MenuBar />
        
        <Modal openKey="teleTaskModal" content={<TeleTaskModal />} />

        <Modal openKey="dailyTaskModal" content={<DailyTaskModal />} />

      </Router>
    </div>
  );
}

export default App;
