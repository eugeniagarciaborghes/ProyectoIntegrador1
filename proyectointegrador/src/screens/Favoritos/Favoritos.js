import React, { Component } from 'react'

class Favoritos extends Component {
    constructor(props){
        super(props)
        this.state = {
            arrFavs:[]
        }
    }

    componentDidMount(){
        let storage = localStorage.getItem('favoritos')
        if(storage !== null){
            let parsedStorage = JSON.parse(storage)
            parsedStorage.map(elm => {
                fetch(`https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=8f700484f7a536b79e4de455e52eb11a${elm}`)
                .then(resp => resp.json())
                .then(data => this,setState({
                    arrFavs: this.state.arrFavs.concat(data)
                }, ()=> console.log(this.state.arrFvas)))
                .catch(err => console.log(err))
            })
        }
    }

    render(){
        return(
            <div>Favoritos</div>
        )
    }


}

export default Favoritos

