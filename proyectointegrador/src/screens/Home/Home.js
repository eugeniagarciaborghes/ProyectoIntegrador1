import React, {Component} from 'react'
/*import Card from '../../componentes/Card'*/

class Home extends Component {
    constructor (props){
        super (props)
        this.state={
            movies: [],
            series: []


        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?8f700484f7a536b79e4de455e52eb11a=<<8f700484f7a536b79e4de455e52eb11a>>&language=en-US&page=1')
        .then(response => response.json())
        /*.then(data => this.setState())*/
        .then(data => console.log(data))
        .catch (error => console.log(error));
    }


    render () {
        return (
            <>
            <h1> Home</h1>
              
            </>

        )
    }


}

export default Home