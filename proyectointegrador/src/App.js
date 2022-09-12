import React from 'react';
import Home from './screens/Home/Home';
import Footer from './componentes/Footer/Footer';
import Header from './componentes/Header/Header';



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
