import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './NavSearch'

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='homeLink'>
                <Link to={ '/' }>Home</Link>
            </div>
            <div className='navSearch'>
                <SearchForm />
            </div>
        </div>
    )
}

export default NavBar;