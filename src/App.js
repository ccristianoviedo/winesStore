import './App.css';
import ItemListContainer from './Components/Landing/itemListContainer';
import NameStore from './Components/nameStore';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NameStore/>
        <NavBar/>
        <div className='itemsLanding'>
          <ItemListContainer />
        </div>
      </header>
    </div>
  );
}
export default App;