import React from 'react';
import './hero.scss';
import styled from 'styled-components';



export const Hero = ({children}) => {

    // const useStyles = makeStyles(theme => ({
    //     backgroundImage: "url('/images/TFF\ 2019-2.jpg')"
    // }));

    const backgroundImage = "./images/TFF-2019-2.jpg";

    const Hero = styled.section`
        background: url(${backgroundImage});
        background-color: rgb(109, 109, 109);
        background-blend-mode: color-burn;
        background-position: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 669px;

    `;

    return(
        <Hero>
            {children}
        </Hero>
    );
}

export const HeroContent = ({children}) => 
    <div className="hero-content">
        <span>{children}</span>
    </div>
