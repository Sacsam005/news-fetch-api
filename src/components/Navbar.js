import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ links }) => {
    return (
        <>
            <nav className='navbar'>
                <ul className='nav-link'>
                    {
                        links.map((link, i) => (
                            <Link key={i} to={link.to}>{link.name}</Link>
                        ))
                    }
                </ul>
            </nav>
        </>
    );
};

export default Navbar;