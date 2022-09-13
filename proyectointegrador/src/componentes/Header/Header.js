import React from 'react';
import './Header.css';

function Header(props) {
    return (
        <header>
            <div>
                <div className = "identidad"> 
                    
                    <img className= "logo" src= '' alt=''></img> 

                     <h1>Movies</h1>
                     
                </div>
                <div className="nav-bar">
                    <nav>
                    {props.menu.map((opcion, idx) =><li key={`${Date.now()}-${idx}`} >{opcion}</li>)}
                    </nav>
                </div>

                <ul>
                    <li>
                        <a href= '/'> HOME</a>
                    </li>

                    <li>
                        <a href= ''> FAV</a>
                    </li>

                    
                    
                </ul>
            </div>
        </header>
    )
}

export default Header;