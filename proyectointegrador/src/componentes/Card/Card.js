import React, {Component} from 'react'
/*import "./Card.css";*/
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
                    <h4>{this.props.info.title}</h4>
                    
                    <img src={`https://image.tmdb.org/t/p/w342/${this.props.info.poster_path}`} alt={this.props.info.title} />

                </div>
                <i className={`fas fa-${this.props.info.icon} fa-2x text-gray-300`}></i>
                <>
                    <a href=''>Ver mas</a>
                    <br></br>
                    <p>Agregar a favoritos</p>
                    <br></br>
                    <>
                        <a href='./Details'>Ir a Detalles</a>

                    </>
                </>
            </article>
        )
    }    
}

export default Card