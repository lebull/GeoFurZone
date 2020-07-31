import React from 'react';
import './section.scss';

export const Section = ({children, top}) => {

    let addClasses = [];
    
    if(top){
        addClasses.push('top');
    }

    return <section className={`section ${addClasses.join()}`}>{children}</section>
}