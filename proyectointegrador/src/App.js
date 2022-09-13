import React from 'react';

import Home from './screens/Home/Home';
import Footer from './componentes/Footer/Footer';
import Header from './componentes/Header/Header';
import Details from './screens/Details/Details';



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

/* app repo clase function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path={'/'} exact={true} component={Home} />
        <Route path={'/Details/:id'} component={Details} />
      </Switch>
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
