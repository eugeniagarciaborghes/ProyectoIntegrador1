import React, { Component } from 'react'

class Buscador extends Component {
    constructor(props){
        super(props)
        this.state = {
            valorInput:''
        }
    }

// metodos que se encargan de gestionar el cambio dentro del estado

//prevenir que mi sitio se recargue
  evitarDefault(event){
    event.preventDefault();
}

//para gestionar los cambios del estado
  controlarCambios(evento){
   this.setState({
       valor: evento.target.value
    }, () =>this.props.search(this.state.valor));
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