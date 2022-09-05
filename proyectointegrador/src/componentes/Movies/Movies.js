import React, {Component}  from "react";
import Card from "../Card/Card";
import TopBar from "../Topbar/TopBar";
import "./Movies.css"

class Movies extends Component{
    constructor(props){
        super(props)
        this.state ={
            datos: [],
            
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?8f700484f7a536b79e4de455e52eb11a=<<8f700484f7a536b79e4de455e52eb11a>>&language=en-US&page=1')
        .then(response => response.json())
        .then(data => this.setState(

        ))
        .catch (error => console.log(error));
    }

    render(){
        return(
            <article>
                
            </article>


        )
    }

}



export default Movies;