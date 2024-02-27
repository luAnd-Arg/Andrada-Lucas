import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListConteiner from './components/itemListConteiner/ItemListConteiner';
function App() {
  return (
    <div className="App">
    <header className='App_header'>
      <h1 className='app_title'> <a href='#'> < img src={logo} className="App-logo" alt="logo" />Pañalera "LuAnd" < img src={logo} className="App-logo" alt="logo" /></a> 
      </h1>
    </header>        
<NavBar />
<ItemListConteiner saludo = "Bienvenido a nuestra pagina oficial" mensaje ="Sitio en Construcción"/>
</div>
  );
}

export default App;
