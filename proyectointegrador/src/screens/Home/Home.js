import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Cards from '../../componentes/Cards/Cards';
/*import App from '../../App';*/

/*import Cards from '../../componentes/Cards'*/

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
            textoSearch:"",


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
    search(buscado){
        let listaFiltrada= this.state.datos.filter(movies=>movies.title.toUpperCase().includes(buscado.toUpperCase()))
         if (listaFiltrada.length> 0) {
             this.setState({
                 datosFiltrados:listaFiltrada,
                 textoSearch:""
             })
             
         }else{
 
             this.setState({
                 datosFiltrados:[],
                 textoSearch: "No hay resultados para su parametro de busqueda"
             })
            
         }
     }

    /*componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=8f700484f7a536b79e4de455e52eb11a&language=en-US&page=1')
        .then(response => response.json())
        .then(data => this.setState({
            topmovies: data.results,
            //ready : true

        }, console.log(data.results)))
        .catch (error => console.log(error));
    }*/





   // https://api.themoviedb.org/3/movie/top_rated?api_key=8f700484f7a536b79e4de455e52eb11a&language=en-US&page=1


    render () {
        return (
            <div>
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
            </div>
            

        )
    }

    


}

export default Home