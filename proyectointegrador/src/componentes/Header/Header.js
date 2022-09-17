import React, { Component } from "react";
import './Header.css';

class Header extends Component{
    constructor(props){
      super(props)
      this.state ={
          valor:''
  
      }
  }

// metodos que se encargan de gestionar el cambio dentro del estado

//prevenir que mi sitio se recargue
  evitarDefault(evento){
    evento.preventDefault();
}

//para gestionar los cambios del estado
  controlarCambios(evento){
    this.setState({
        valor: evento.target.value
    }, () =>this.props.search(this.state.valor));
}

//faltan links a home, favs, y ver todas
  render(){
    return (
        <header className = 'header'>
            <h1 className = 'titulo'>Movies</h1>
            <section className="menu">
            <form onSubmit={ (evento) => this.evitarDefault(evento) }>
                <input type="text" onChange={(evento)=> this.controlarCambios(evento) } value={this.state.valor} placeholder="Buscar Peliculas"/>
                <button type="submit" value="submit" >Buscar</button>
            </form>
            </section>
        </header>
    )
  }
}

export default Header