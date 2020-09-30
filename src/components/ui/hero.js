import React from 'react';
import './hero.scss';

export const Hero = ({children}) => {

    // const useStyles = makeStyles(theme => ({
    //     backgroundImage: "url('/images/TFF\ 2019-2.jpg')"
    // }));

    const backgroundImage = "./images/TFF-2019-2.jpg";


    return(
        <section className="hero center" style={
            {
               backgroundImage: `url(${backgroundImage})`,      
            }
         }>
            {children}
        </section>
    );
}

export const HeroContent = ({children}) => 
    <div className="hero-content">
        <span>{children}</span>
    </div>
