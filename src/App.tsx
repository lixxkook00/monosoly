import { BrowserRouter as Router } from 'react-router-dom';

import { MenuBar } from './components';
import AppRoutes from './routers/routes';
import Modal from './components/common/modal';
import { DailyTaskModal, TeleTaskModal } from './pages/earn/components';
import { PackagePopup } from './pages/mine/components';
import { LanguagePopup } from './pages/settings/components';

function App() {
  return (
    <div id="app">
      <Router>
        <AppRoutes />
        
        <MenuBar />
        
        <Modal openKey="teleTaskModal" content={<TeleTaskModal />} />

        <Modal openKey="dailyTaskModal" content={<DailyTaskModal />} />

        <Modal openKey="packageModal" content={<PackagePopup />} />

        <Modal openKey="languageModal" content={<LanguagePopup />} />

      </Router>
    </div>
  );
}

export default App;
