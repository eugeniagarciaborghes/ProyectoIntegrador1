import React, {Component}  from "react";
/*import Card from "../Card/Card";
import TopBar from "../Topbar/TopBar";*/
import "./Movies.css"

class Movies extends Component{
    constructor(props){
        super(props)
        this.state ={
            peliculas: [],
            backup: info,
            prueba: ''
            
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=8f700484f7a536b79e4de455e52eb11a')
        .then(response => response.json())
        .then(data => this.state({
            peliculas: data.results

        }))
        .catch (error => console.log(error));
    }

    render(){
        return(
            <>
            <Search filtrar={(nombre)=> this.filtrarPersonajes(nombre)} />
              <h2>Personajes de películas</h2>
              <section className="card-container">
                {this.state.personajes.map((personaje, idx) => 
                  <Character 
                    info={personaje}
                  />)}
    
                  <button onClick={()=> this.cargarMas()}>Cargar mas</button>
              </section>
            </>
            







            /*<article>
                
            </article>*/


        )
    }

}



export default Movies;