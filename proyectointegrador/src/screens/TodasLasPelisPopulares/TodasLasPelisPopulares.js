import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Cards from '../../componentes/Cards/Cards';
import Card from '../../componentes/Card/Card';
import Header from "../../componentes/Header/Header";
import Buscador from '../../componentes/Buscador/Buscador';
import '../Home/Home.css';




class TodasLasPelisPopulares extends Component {
    constructor (props){
        super (props)
        this.state={
            mostrarMas: false,
            texto : 'Mostrar Mas',
            popularmovies: [],
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



    render () {
        return (
            <main>
                <React.Fragment>
                <Header/>
                <Buscador search={(valor)=>this.search(valor)} />
                {
                  this.state.datosFiltrados.length > 0
                  ? 
                 <Cards info={this.state.datosFiltrados}/>
                 :''
                }
                <h2 className='h2'> Todas las peliculas populares</h2>
                <section className='peliculas'>
                    <>
                        { this.state.popularmovies === '' ?   
                        <div class="lds-ellipsis"></div>
                        :
                        <Cards info ={this.state.popularmovies} /> }
                    </>
                </section>   
                </React.Fragment>
            </main>
            

        )
    }

    


}


export default TodasLasPelisPopulares
