import React from 'react';
import { ReactBingmaps } from 'react-bingmaps';
import { furcons } from '../data/cons';
import { keys } from '../data/keys';
import { useHistory } from "react-router-dom";
import "./furconMap.scss";

export const FurconMap = ({ focusedFurconKey=null, useInfoBoxes=false}) => {

    let history = useHistory();

    const latlong = (furcon) => furcon.location.latlong.split(",").map(latlong => parseFloat(latlong));

    const pushPins = furcons.map(furcon => {
        return {
            "location": latlong(furcon),
            "addHandler": { "type": "click", callback: () => history.push(`/conventions/${furcon.key}`) },
            "option": { title: furcon.name, color: "#008C87" },
        }
    });

    let centerLocation = [39.8283, -98.5795]

    if (focusedFurconKey) {
        const focusedFurcon = furcons.find(furcon => furcon.id === focusedFurconKey);
        centerLocation = latlong(focusedFurcon);
        //focusedFurcon is going to be used later I think
    }

    return (
        <ReactBingmaps
            bingmapKey={keys.bingmaps}
            center={centerLocation}
            zoom={focusedFurconKey ? 12 : 5}
            pushPins={pushPins}
        />
    );
}