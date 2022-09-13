import React, {Component} from 'react'
import Cards from '../../componentes/Cards/Cards';
/*import App from '../../App';*/

/*import Cards from '../../componentes/Cards'*/

class Home extends Component {
    constructor (props){
        super (props)
        this.state={
            popularmovies: [],
            topmovies: [],
            /*ready : false*/


        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=8f700484f7a536b79e4de455e52eb11a')
        .then(response => response.json())
        .then(data => this.setState({
            popularmovies: data.results,
            //ready : true

        }, console.log(data.results)))
        .catch (error => console.log(error));
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
            </div>
            

        )
    }


}

export default Home