import React, { useState, useEffect } from 'react';
import { useWindowSize } from '../../customHooks';
import { NavLink } from 'react-router-dom';

import './style.css';
import logo from '../../images/mini-logo.png';

export default function () {
    const [menuOpen, setMenuOpen] = useState(false);
    const { mobile } = useWindowSize();

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const showBurger = () => {
        return (
            <div onClick={toggleMenu} className={`hamburger ${menuOpen ? 'open' : 'closed' }`}>
                <div className="hamburger__top_bun"></div>
                <div className="hamburger__bottom_bun"></div>
            </div>
        )
    }
    
    const openStatus = () => menuOpen ? 'ls_open' : 'ls_closed';

    const linksetResponsiveClasses = mobile ? `mobile ${openStatus()}` : 'desktop';

    return (
        <nav>
            { mobile && showBurger()}
            <span id="logo"><NavLink to='/'><img src={logo} alt="Logo" /></NavLink></span>
            <section id="linkset" className={linksetResponsiveClasses}>
                <NavLink to='/who' onClick={toggleMenu} className="navlink" activeClassName="current">Who</NavLink>
                <NavLink to='/what' onClick={toggleMenu} className="navlink" activeClassName="current">What</NavLink>
                <NavLink to='/where' onClick={toggleMenu} className="navlink" activeClassName="current">Where</NavLink>
            </section>
        </nav>
    )
}
