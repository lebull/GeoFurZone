import React from 'react';

export const Nav = ({children}) => 
    <nav className="nav">
        <ul>
           {children}
        </ul>
    </nav>

export const NavLink = ({children}) => 
    <li className="nav-link"><a href="https://www.google.com">{children}</a></li>