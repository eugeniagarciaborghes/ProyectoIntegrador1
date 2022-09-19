import React, { Component } from 'react'
import Card from '../../componentes/Card/Card';


/*class Favoritos extends Component {
    constructor(props){
        super(props)
        this.state = {
            arrFavs:[],
        }
    }

    componentDidMount(){
        let storage = localStorage.getItem('favoritos')
        if(storage !== null){
            let parsedStorage = JSON.parse(storage)
            parsedStorage.map(elm => {
                fetch(`https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=8f700484f7a536b79e4de455e52eb11a${elm}`)
                .then(resp => resp.json())
                .then(data => this.setState({
                    arrFavs: this.state.arrFavs.concat(data)
                }, ()=> console.log(this.state.arrFavs)))
                .catch(err => console.log(err))
            })
        }
    }

    render() {
        return (
            <>
                <h2>Películas favoritas</h2>
                <section className='card-container'>
                <div>
                   {this.state.arrFavs.map((peliculas, idx) => 
                    <Card 
                      key={`${Date.now()}-${idx}`}  
                      info={peliculas}
                     />)}
                </div>
                </section>
            </>
        )

    }

}

export default Favoritos */


class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
        }
    }

    componentDidMount() {
        let favoritos = [];
        let parsedStorage = localStorage.getItem("favoritos")
        
        if (parsedStorage !== null) {

            favoritos = JSON.parse(parsedStorage) // array de ids

            favoritos.forEach(unIdFavorito => {

                fetch(`https://api.themoviedb.org/3/movie/${unIdFavorito}?api_key=8f700484f7a536b79e4de455e52eb11a&language=en-US&page=1`)
                    .then(res => res.json())
                    .then(data => this.agregarAFavoritos(data) )
                    .catch(e => console.log(e))
            })                
        }

    }

    agregarAFavoritos = (x) => {
        let _peliculas = this.state.peliculas;
        _peliculas.push(x);
        this.setState({ peliculas: _peliculas })        
    }

    // addSeriesAFavoritos = (x) => {
    //     let _series = this.state.series;
    //     _series.push(x);
    //     this.setState({ series: _series })        
    // }


    render() {
        return (
            <>
                <h2>Películas favoritas</h2>
                <section className='cardContainer'>
                    {
                        this.state.peliculas.map((unaPelicula, idx) => <Card key={unaPelicula.title + idx} datosPelicula={unaPelicula} />)
                    }
                    

                </section>

            </>
        )


    }
}

export default Favoritos;