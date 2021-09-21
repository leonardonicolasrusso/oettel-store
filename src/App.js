import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Home from './views/Home';
import Accesorios from './views/Accesorios';
import Lentes from './views/Lentes';
import Relojes from './views/Relojes';



function App() {


  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact patch="/">
          <ItemListContainer />
        </Route>
        <Route patch="/accesorios">
          <Accesorios />
        </Route>
        <Route patch="/lentes">
          <Lentes />
        </Route>
        <Route patch="/relojes">
          <Relojes />
        </Route>
      </Switch>


      {/* <ItemListContainer /> */}


      {/* // <div className="App">
      //   <header className="App-header">
      //     <NavBar />
      //   </header>
      //   <ItemListContainer />
      // </div> */}
    </BrowserRouter>
  );
}

export default App;
