import React from 'react';
import './hero.scss';

export const Hero = ({children}) => {
    return(
        <section className="hero center">
            {children}
        </section>
    );
}

export const HeroContent = ({children}) => 
    <div className="hero-content">
        <span>{children}</span>
    </div>