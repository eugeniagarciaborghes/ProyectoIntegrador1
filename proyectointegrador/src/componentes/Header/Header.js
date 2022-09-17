import React, { Component } from "react";
import { Link } from 'react-router-dom'


class Header extends Component{
    constructor(props){
      super(props)
      this.state ={
  
      }
  }

  render(){
    return (
        <header className = 'header'>
            <h1 className = 'titulo'>Movies</h1>
            <ul className="menu">
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/favoritos'>Favoritos</Link>
              </li>
              <li>
                <Link href='/'>Ver Todas</Link>
              </li>
            </ul>
        </header>
    )
  }
}

export default Header