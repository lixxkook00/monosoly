import { BrowserRouter as Router } from 'react-router-dom';

import { MenuBar } from './components';
import AppRoutes from './routers/routes';

function App() {
  return (
    <div id="app">
      <Router>
        <AppRoutes />
        <MenuBar />
      </Router>
    </div>
  );
}

export default App;
