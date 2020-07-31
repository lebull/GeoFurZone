import React from 'react';
import './button.scss';

export const Button = ({text, onClick}) => 
    <button className="button" onClick={onClick}>{text}</button>
