import React, { Component } from "react";
import '../Details/Details.css';
import Header from '../../componentes/Header/Header.js';

class Details extends Component{
    constructor(props){
        super(props);
        this.state ={
            id: this.props.match.params.id,
            details: {},
            /*favsMessage: "Fav"*/
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=8f700484f7a536b79e4de455e52eb11a&language=en-US`)
        .then(res => res.json())
        .then(data => this.setState(
            {details: data}
        ))
        .catch(e => console.log(e))
    }    


    render(){
        console.log(this.state.details.genres)

        return(
            <main>
                    <React.Fragment>
                    <Header></Header>
                    <div className="loader">
                    {this.state.datos === ""?
                        <h3>Cargando...</h3> :
                        <h3>{this.state.peliculas}</h3>}
                    </div>
                    <section className="titulo">
                    <h2>{this.state.details.original_title}</h2>

                    </section>
                    

                    <section className="container">

                    
                    
                    <article className="portada">
                    <img src={`https://image.tmdb.org/t/p/w500/${this.state.details.poster_path}`} alt={this.state.details.original_title} />
                    </article>


                    <article className="movieDetail">
                        
                        <p>{this.state.details.overview}</p>
                        <p>Calificación: {this.state.details.vote_average}</p>
                        <p>Fecha de Lanzamiento: {this.state.details.release_date}</p>
                        <p>Genero: {this.state.details.genre_ids}</p>

                    </article>

                    
                    </section>
                </React.Fragment>
            </main>
            
        )
    }
} 


export default Details;