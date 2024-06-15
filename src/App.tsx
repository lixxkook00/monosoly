import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './routers/routes';
import { MenuBar } from './components';

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
