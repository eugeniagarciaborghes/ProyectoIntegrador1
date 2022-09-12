import React, {Component} from 'react'
import Cards from '../../componentes/Cards/Cards';
import App from '../../App';
/*import Cards from '../../componentes/Cards'*/

class Home extends Component {
    constructor (props){
        super (props)
        this.state={
            movies: [],
            series: [],
            ready : false


        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=8f700484f7a536b79e4de455e52eb11a')
        .then(response => response.json())
        .then(data => this.setState({
            movies: data.data,
            ready : true

        }))
       .then(data => console.log(data))
        .catch (error => console.log(error));
    }


    render () {
        return (
            <>
            <h1> Home</h1>
            {
                this.state.ready ?
                    <>
                        <Cards info ={this.state.movies} />
                    </> :
                'Cargando...'
            }
            </>

        )
    }


}

export default Home