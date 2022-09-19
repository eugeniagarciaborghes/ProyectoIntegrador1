import React from 'react';
import {Switch, Route} from 'react-router-dom'
//screns
import Home from './screens/Home/Home';
import Footer from './componentes/Footer/Footer';
import Details from './screens/Details/Details';
import NotFound from './screens/NotFound/NotFound';
import Favoritos from './screens/Favoritos/Favoritos';
import TodasLasPelisPopulares from './screens/TodasLasPelisPopulares/TodasLasPelisPopulares';
import TodasLasPelisTop from './screens/TodasLasPelisTop/TodasLasPelisTop';

function App() {

  const opciones = ['Home', 'Favoritos']
  return(

//falta link de ver todas
    <>
    <Switch>
      <Route path='/' exact={true} component={Home}/>
      <Route path='/favoritos' component={Favoritos}/>
      <Route path={'/details/:id'} component={Details}/>
      <Route path={'/TodasLasPelisPopulares'} component={TodasLasPelisPopulares}/>
      <Route path={'/TodasLasPelisTop'} component={TodasLasPelisTop}/>
      <Route path={'/'} component={NotFound}/>
      
    </Switch>
    <Footer></Footer>
    </>
 
  );
  
}

export default App;
