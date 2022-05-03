import './App.css';
import ItemListContainer from './Components/Landing/ItemListContainer';
import NameStore from './Components/NameStore';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NameStore/>
        <NavBar/>      
      </header>
      <nav>
        <ItemListContainer />      
      </nav>     
    </div>
  );
}
export default App;