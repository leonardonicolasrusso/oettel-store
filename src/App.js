import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App() {

  const products = [
  {id: 1, category:"accesorios", title:"Aritos", description:"Colores varios", price:300, stock:5, pictureUrl:'../../assets/media/aritos.webp'},
  {id: 2, category:"lentes", title:"Anteojos", description:"Antireflejo", price:500, stock:15, pictureUrl:'../../assets/media/anteojos.webp'},
  {id: 3, category:"relojes", titel:"Reloj Dama", description:"Sumergible", price:800, stock:30, pictureUrl:'../../assets/media/reloj-dama.webp'}
  ]

  return (
      <BrowserRouter>
        <NavBar products={products}/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route path="/category/:category">
            <ItemListContainer />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
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
