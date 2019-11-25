import React, {Component} from 'react'
import logo from '../../logo.svg';
import './navbar.scss';

class Navbar extends Component {
    render(){
        return(
            <nav className='navbar'>
                <img src={logo} alt='logo company'/>
                <ul className='nav-links'>
                <li><a href='/' className='nav-link'>home</a></li>
                <li><a href='/' className='nav-link'>about</a></li>
                <li><a href='/' className='nav-link active'>tours</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;