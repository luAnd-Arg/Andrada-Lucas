import './App.css';
import NavBar from './components/navBar/NavBar';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './components/home/Home';
import Nosotros from './components/nosotros/Nosotros';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import ItemListConteiner from './components/itemListConteiner/ItemListConteiner';
import Carrito from './components/cart/Carrito';

function App() {
  return (
    
<div className="App">
  <BrowserRouter>
  <header className='App_header'>
  <NavBar/>
  </header>
  <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/item/:id' element={<ItemDetailContainer />}/>
   <Route path='/productos/:categorias' element = {<ItemListConteiner/>}/>
   <Route path='/productos' element = {<ItemListConteiner/>}/>
   <Route path='/nosotros' element={<Nosotros/>} />
   <Route path='/carrito' element={<Carrito/>}/>
   {/* <Route path='/contacto' element={<Contacto/>} /> */}
  </Routes>
  
  </BrowserRouter>
</div>

  );
}

export default App;
