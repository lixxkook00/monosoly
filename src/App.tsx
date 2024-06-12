import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './routers/routes';
import { MenuBar } from './components';

function App() {
  return (
    <>
      <Router>
        <AppRoutes />
      </Router>

      <MenuBar />
    </>
  );
}

export default App;
