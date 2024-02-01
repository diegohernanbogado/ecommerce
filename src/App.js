import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "bulma/css/bulma.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Encontrá tus productos de belleza, bebes, farmacia y mucho más en Pharmaciudad'}/>
    </div>
  );
}

export default App;
