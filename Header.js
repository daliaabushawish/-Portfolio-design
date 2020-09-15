import React, { Component } from "react";
 import Background from './img/bg-img.jpg';
import './Header.css';

 var Style = {
     backgroundImage: `url(${Background})`,
     height: '50vh',
     backgroundSize: 'cover',

};

class Header extends Component {
    
    render() { 
        return ( 
          <header style={ Style }>
             <h1>{this.props.title}</h1>
             <p> Welcome In My Portfolio</p>
        <a href="#button">{this.props.button}</a>
            </header>
         );
    }
}
 
export default Header;