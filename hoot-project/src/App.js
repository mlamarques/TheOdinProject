import { BrowserRouter as Router, Link } from 'react-router-dom'
import './styles/global.css'
import MainRoutes from './routes'

function App() {
  return (
    <Router>
      <div className="App">
        <MainRoutes />
      </div>
    </Router>
  );
}

export default App;
