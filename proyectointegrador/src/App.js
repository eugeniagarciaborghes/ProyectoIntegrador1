import React from 'react';
import {Switch, Route} from 'react-router-dom'
//screns
import Home from './screens/Home/Home';
import Footer from './componentes/Footer/Footer';
import Details from './screens/Details/Details';
import NotFound from './screens/NotFound/NotFound';
import Favoritos from './screens/Favoritos/Favoritos';
import TodasLasPelis from './screens/TodasLasPelis/TodasLasPelis';

function App() {

  const opciones = ['Home', 'Favoritos']
  return(

//falta link de ver todas
    <>
    <Switch>
      <Route path='/' exact={true} component={Home}/>
      <Route path='/favoritos' component={Favoritos}/>
      <Route path={'/details/:id'} component={Details}/>
      <Route path={'/TodasLasPelis'} component={TodasLasPelis}/>
      <Route path={'/'} component={NotFound}/>
      
    </Switch>
    <Footer></Footer>
    </>
 
  );
  
}

export default App;
