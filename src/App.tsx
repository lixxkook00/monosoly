import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './routers/routes';
import { MenuBar, Modal } from './components';

function App() {
  return (
    <div id="app">
      <Router>

        <AppRoutes />
        
        <MenuBar />

        <Modal openKey="teleTaskModal" />
        
      </Router>
    </div>
  );
}

export default App;
