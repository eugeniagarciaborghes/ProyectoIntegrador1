import React, {Component} from 'react'
/*import "./Card.css";*/

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
                    <img src= {this.props.info.poster_path} alt= {this.props.info.title}></img>
                </div>
                <i className={`fas fa-${this.props.info.icon} fa-2x text-gray-300`}></i>
            </article>
        )
    }    
}

export default Card