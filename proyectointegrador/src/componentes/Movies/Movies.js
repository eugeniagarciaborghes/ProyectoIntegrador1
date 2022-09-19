import React, {Component}  from "react";
import Card from "../Card/Card";
//import TopBar from "../Topbar/TopBar";
import "./Movies.css"
import {Link} from 'react-router-dom'

class Movies extends Component{
    constructor(props){
        super(props)
        this.state ={
            peliculas: [],
            
            
        }
    }

    componentDidMount(){
        //pelis populares
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=8f700484f7a536b79e4de455e52eb11a')
        .then(response => response.json())
        .then(data => this.state({
            peliculas: data.results

        }, console.log("popular movies",data.results)))
        .catch (error => console.log(error));
        //pelis top
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=8f700484f7a536b79e4de455e52eb11a&language=en-US&page=1')
        .then(response => response.json())
        .then(data => this.setState({
            topmovies: data.results,
            //ready : true

        }, console.log("Top movies",data.results)))
        .catch (error => console.log(error));




    }

    render(){
        return(
            <>
            <div>
                <h2>Peliculas Populares</h2>
                <Link to='/series'><h3>Ver todas las series populares</h3></Link>
            </div>
            <section className='cardContainer'>
                {
                    this.state.series.map((unaSerie,idx) => <Card key={unaSerie.title+idx} datosSerie = {unaSerie}/>)
                }
                
            </section>

            <div>
                <h2>Top Peliculas</h2>
                <Link to='/peliculas'><h3>Ver todas las películas populares</h3></Link>
            </div>
            <section className='cardContainer'>
                {
                    this.state.peliculas.map((unaPelicula,idx) => <Card key={unaPelicula.title+idx} datosPelicula = {unaPelicula}/>)
                }
                
            </section>


           
            </>

            /*<article>
                
            </article>*/


        )
    }

}



export default Movies;