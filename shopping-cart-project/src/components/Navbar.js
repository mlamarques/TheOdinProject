import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <div className='navbar'>
            <div>
                <Link to='/'>
                    <h1>Shopping Cart Project</h1>
                </Link>
            </div>
            <div className='nav-links'>
                <Link to='/catalog'>
                    <h3>Catalog</h3>
                </Link>
                <Link to='/cart'>
                    <div className='navbar-icon'>
                        {/*<img  src='icons/cart.svg' alt='cart-icon'></img>*/}
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M14 5H2v9a1 1 0 001 1h10a1 1 0 001-1V5zM1 4v10a2 2 0 002 2h10a2 2 0 002-2V4H1z" clipRule="evenodd"></path>
                            <path d="M8 1.5A2.5 2.5 0 005.5 4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z"></path>
                        </svg>
                        <span className='navbar-icon-number'>{props.count}</span>
                    </div>
                </Link>
            </div>
            
        </div>
    )
}

export default Navbar