import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart';
import Notification from './components/Notification/Notification';
import { CartContext } from '../src/Context/CartContext'
import { NotificationCartContextProvider } from './Context/NotificationCartContext';
import { useEffect, useState } from 'react';


function App() {

  const products = [
  {id: 1, category:"accesorios", title:"Aritos", description:"Colores varios", price:300, stock:5, pictureUrl:'../../assets/media/aritos.webp'},
  {id: 2, category:"lentes", title:"Anteojos", description:"Antireflejo", price:500, stock:15, pictureUrl:'../../assets/media/anteojos.webp'},
  {id: 3, category:"relojes", titel:"Reloj Dama", description:"Sumergible", price:800, stock:30, pictureUrl:'../../assets/media/reloj-dama.webp'}
  ]

  const [user, setUser] = useState()

  useEffect(()=> {
    setTimeout(()=>{
      setUser('10')
    }, 2000)
  })

  return (
    <NotificationCartContextProvider>

      <BrowserRouter>
        <CartContext.Provider value={user}>
          <NavBar products={products}/>
        </CartContext.Provider>
            <Notification />
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
                <Route path="/cart">              
                    <Cart />
                </Route>
              </Switch>
      </BrowserRouter>

    </NotificationCartContextProvider>
  );
}

export default App;
