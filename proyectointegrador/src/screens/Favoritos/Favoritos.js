import React, { Component } from 'react'
import Card from '../../componentes/Card/Card';


class Favoritos extends Component {
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

export default Favoritos