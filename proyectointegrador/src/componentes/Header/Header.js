import React, { Component } from "react";
import './Header.css';

class Header extends Component{
    constructor(props){
      super(props)
      this.state ={
  
      }
  }


//faltan links a home, favs, y ver todas
  render(){
    return (
        <header className = 'header'>
            <h1 className = 'titulo'>Movies</h1>
            <section className="menu">
      
    
            </section>
        </header>
    )
  }
}

export default Header