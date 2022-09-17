import React from 'react';
import {Switch, Route} from 'react-router-dom'
//screns
import Home from './screens/Home/Home';
import Footer from './componentes/Footer/Footer';
import Details from './screens/Details/Details';
import NotFound from './screens/NotFound/NotFound';
import Favoritos from './screens/Favoritos/Favoritos';

function App() {

  const opciones = ['Home', 'Favoritos']
  return(

    <>
    <Switch>
      <Route path='/' component={Home}/>
      <Route path='/favoritos' component={Favoritos}/>
      <Route path={'/details/:id'} component={Details}/>
    </Switch>
    </>
 
  );
  
}

export default App;
