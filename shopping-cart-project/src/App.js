import './styles/global.css'
import Routes from './components/Routes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
