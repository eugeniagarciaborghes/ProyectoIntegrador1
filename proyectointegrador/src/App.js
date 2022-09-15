import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Home from './screens/Home/Home';
import Footer from './componentes/Footer/Footer';
import Header from './componentes/Header/Header';
import Details from './screens/Details/Details';
import NotFound from './screens/NotFound/NotFound';



function App() {

  const opciones = ['Home', 'Favoritos']
  return(

    <div>
    <Header menu ={opciones}/>
    <Home/>
    <Footer/>
    </div>
 
  );
  
}

/*function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path={'/'} exact={true} component={Home} />
        <Route path={'/Details/:id'} component={Details} />
      </Switch>
      <Footer/>
    </>
  );
}*/

/*function App() {
  return (
    <React.Fragment>
    <Footer>
      <ul className="team">
        <li>Eugenia Garcia Borghes</li>
        <li>Franco Santicchia</li>
      </ul>
    </Footer>
    </React.Fragment>

    




  );
}*/

export default App;
