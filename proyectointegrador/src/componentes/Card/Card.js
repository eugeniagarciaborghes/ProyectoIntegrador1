import React, {Component} from 'react'
import "./Card.css";
import {Link} from 'react-router-dom';

class Card extends Component {
    constructor(props){
        super(props)
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
                            <a href='' className='votonVerMas'>Ver Más</a>
                        </li>
                        <li className='botonPeli'>
                            Ir a detalles
                        </li>
                        <li className='botonPeli'>
                            Agregar a Fav
                        </li>
                    </ul>
                    
                   
                </>
            </article>
        )
    }    
}

export default Card