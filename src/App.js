import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Proximamente tu BEER" />
    </div>
  );
}

export default App;

