import React, {Component} from 'react'
    /*import "./Card.css";*/

    class Card extends Component {
        constructor(props){
            super(props)
        }
    render () {
        return (
            <div>{this.props.info}</div>
        )
    }    
}

export default Card