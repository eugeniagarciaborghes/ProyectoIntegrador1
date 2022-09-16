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
  controlarCambios(event){
    this.setState({
        valor: event.target.value
    }, () =>this.props.search(this.state.valor));
}

  render(){
    return (
        <header className = 'header'>
            <h1 className = 'titulo'>Movies</h1>
            <section className="menu">
            <form action="" onSubmit={ (evento) => this.evitarDefault(evento) }>
                <input type="text" onChange={(event)=> this.controlarCambios(event) } value={this.state.valor} placeholder="Buscar Peliculas"/>
                <button type="submit" value="submit" >Buscar</button>
            </form>
            </section>
        </header>
    )
  }
}

export default Header;