import React, { Component } from 'react'

class Buscador extends Component {
    constructor(props){
        super(props)
        this.state = {
            valorInput:''
        }
    }


  evitarDefault(event){
    event.preventDefault();
}

  controlarCambios(evento){
   this.setState({
       valorInput: evento.target.value
    }, () =>this.props.search(this.state.valorInput));
}

    render(){
        return(
            <form onSubmit={ (event) => this.evitarDefault(event) }>
                <input action="" type="text" onChange={(evento)=> this.controlarCambios(evento) } value={this.state.valorInput} placeholder="Buscar Peliculas"/>
                <button type="submit" value="submit" >Buscar</button>
            </form>
        )
    }

}

export default Buscador