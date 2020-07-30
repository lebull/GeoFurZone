import React from 'react';
import './convention.scss';
// import { FurconMap } from '../components/furconMap';
import { useParams } from 'react-router-dom';

export const Convention = () => {
    const {id} = useParams();

    return <div>{id}</div>
}
