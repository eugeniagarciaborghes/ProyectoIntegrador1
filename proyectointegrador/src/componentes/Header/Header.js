import React, { Component } from "react";
import { Link } from 'react-router-dom'
import '../Header/Header.css'

class Header extends Component{
    constructor(props){
      super(props)
      this.state ={
  
      }
  }

  render(){
    return (
        <header className = 'header'>
            <h1 className = 'titulo'>MovieCenter
            </h1>
            <ul className="menu">
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/favoritos'>Favoritos</Link>
              </li>
              <li>
                <Link to='/TodasLasPelis'>Ver Todas</Link>
              </li>
            </ul>
        </header>
    )
  }
}

export default Header