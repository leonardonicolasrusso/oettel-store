import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Products from './components/Product/Products';

function App() {

  const products = [
  {id: 1, category:"accesorios", title:"Aritos", description:"Colores varios", price:300, stock:5, pictureUrl:'../../assets/media/aritos.webp'},
  // {id: 2, category:"accesorios", title:"Pulseras", description:"Importadas", price:400, stock:10, pictureUrl:'../../assets/media/pulseras.webp'},
  {id: 3, category:"lentes", title:"Anteojos", description:"Antireflejo", price:500, stock:15, pictureUrl:'../../assets/media/anteojos.webp'},
  // {id: 4, category:"lentes", title:"Lentes de sol", description:"Bluelightcut", price:600, stock:20, pictureUrl:'../../assets/media/anteojosblack.webp'},
  // {id: 5, category:"relojes", title:"Reloj Hombre", description:"Acero", price:700, stock:25, pictureUrl:'../../assets/media/reloj-hombre.webp'},
  {id: 6, category:"relojes", titel:"Reloj Dama", description:"Sumergible", price:800, stock:30, pictureUrl:'../../assets/media/reloj-dama.webp'}
  ]

  return (
      <BrowserRouter>
        <NavBar products={products}/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/product/:category">
            <Products />
          </Route>
          {/* <Route path="/accesorios">
            <ItemDetailContainer />  
          </Route>
          <Route path="/lentes">
            <ItemListContainer />
          </Route>
          <Route path="/relojes">
            <ItemDetailContainer />  
          </Route> */}
        </Switch>
      </BrowserRouter>
  );
}

export default App;
