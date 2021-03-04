import './styles/global.css'
import Routes from './components/Routes'

const App = () => {
  const id = '0'
  return (
    <div className="App">
      <Routes id={id}/>
    </div>
  );
}

export default App;
