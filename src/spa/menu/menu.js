import React from 'react';
import { Link } from "react-router-dom";

class Menu extends React.Component {
    
    render() { 
        return ( 
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/blog">Blog</Link></li>

            </ul>

         );
    }
}
 
export default Menu;