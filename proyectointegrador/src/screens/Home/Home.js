import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Cards from '../../componentes/Cards/Cards';
import Header from "../../componentes/Header/Header";
import Buscador from '../../componentes/Buscador/Buscador';
/*import App from '../../App';*/

class Home extends Component {
    constructor (props){
        super (props)
        this.state={
            mostrarMas: false,
            texto : 'Mostrar Mas',
            popularmovies: [],
            topmovies: [],
            /*ready : false*/
            datosFiltrados: [],

        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=8f700484f7a536b79e4de455e52eb11a')
        .then(response => response.json())
        .then(data => this.setState({
            popularmovies: data.results,
            //ready : true

        }, console.log('popular movies', data.results)))
        .catch (error => console.log(error));
     
    
        /*-------------segundo fetch----------------------------------------*/

        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=8f700484f7a536b79e4de455e52eb11a&language=en-US&page=1')
        .then(response => response.json())
        .then(data => this.setState({
            topmovies: data.results,
            //ready : true

        }, console.log("Top movies",data.results)))
        .catch (error => console.log(error));
    }

    masInfo (){
        if (this.state.verMas) {
            this.setState({
                mostrarMas: false,
                texto: 'Mostrar más'
            })
        } else {
            this.setState({
                mostrarMas: true,
                texto: 'Mostrar menos'
            })
        }
    }

    //buscador
    search(valor){
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=8f700484f7a536b79e4de455e52eb11a&language=en-US&page=${valor}`)
        .then(response => response.json())
        .then(data => this.setState({
            datosFiltrados: data.data
             }))                  
        .catch (error => console.log(error));
     }


    render () {
        return (
            <div>
                <React.Fragment>
                <Header></Header>
                <Buscador search={(valor)=>this.search(valor)} />
                {
                  this.state.datosFiltrados.length === 0
                  ?
                 <Cards info={this.state.datosFiltrados}/>
                 :''
                }
                <h2> Peliculas populares</h2>
                <section>
                    <>
                        { this.state.popularmovies === '' ?   
                        <>
                        <h1> Home</h1>
                        <h3> Cargando...</h3>
                        <p> Ver mas</p>
                        </>
                        :
                        <Cards info ={this.state.popularmovies} /> }
                    </>
                </section>   
                <h2> Top rated movies</h2>
                <section>
                    <>
                        { this.state.topmovies === '' ?   
                        <>
                        <h1> Home</h1>
                        <h3> Cargando...</h3>
                        <p> Ver mas</p>
                        </>
                        :
                        <Cards info ={this.state.topmovies} /> }
                    </>
                </section>  
                termina top movies 
                </React.Fragment>
            </div>
            

        )
    }

    


}

export default Home