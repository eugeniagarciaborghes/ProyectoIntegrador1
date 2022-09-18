import React, {Component} from 'react'
import "./Card.css";
// import {Link} from 'react-router-dom';

class Card extends Component {
    constructor(props){
        super(props)
        this.state={
            favorito:false
        }
    }

    componentDidMount(){
        let storage = localStorage.getItem('favoritos')
        let parsedStorage = JSON.parse(storage) /*Array.includes()*/
        let isFavorite
        if(parsedStorage !== null){
           isFavorite = parsedStorage.includes(this.props.info.id)
        }
        if(isFavorite){
            this.setState({
                favorito: true
            })
        }
    }

    removeFavorites(id){
        let storage = localStorage.getItem('favoritos')
        let storageParsed = JSON.parse(storage) /*[1, 2, 4, 95] */
        let filteredStorage = storageParsed.filter(elm => elm !== id)
        let storageToString = JSON.stringify(filteredStorage)
        localStorage.setItem('favoritos', storageToString)
        this.setState({
            favorito: false
        })

    }

    addFavorites(id){
        let storage = localStorage.getItem('favoritos')
        
        if(storage == null){
            let idsArr = [id]
            let idsArrToString = JSON.stringify(idsArr)
            localStorage.setItem('favoritos', idsArrToString)
        } else {
            let parsedStorage = JSON.parse(storage)
            parsedStorage.push(id)
            let storageToString = JSON.stringify(parsedStorage)
            localStorage.setItem('favoritos', storageToString)
        }
        
        this.setState({
            favorito: true
        })
    }
        
    render () {
        console.log(this.props.info);
        return (
           
           //<div>{this.props.info}</div>

           <article className="data-detail">
                <div className="card-content">
                    <h4 className='tituloPeli'>{this.props.info.title}</h4>
                    
                    <img src={`https://image.tmdb.org/t/p/w342/${this.props.info.poster_path}`} alt={this.props.info.title} />

                </div>
                <i className={`fas fa-${this.props.info.icon} fa-2x text-gray-300`}></i>
                <>
                    <ul className='botonesPelis'>
                        <li className='botonPeli'>
                            <a href='/' className='votonVerMas'>Ver Más</a>
                        </li>
                        <li className='botonPeli'>
                            <a href={`/details/${this.props.info.id}`} className='votonVerMas'>Detalles</a>
                        </li>
                        {
                            this.state.favorito ?
                            <button onClick={()=>this.removeFavorites(this.props.info.id)}>Añadir a favoritos</button>
                            :
                            <button onClick={()=>this.addFavorites(this.props.info.id)}>Sacar de favoritos</button>
                        }
                        <button onClick={() => this.props.borrar(this.props.info.id)}>Borrar</button>
                    </ul>
                    
                   
                </>
            </article>
        )
    }    
}

export default Card