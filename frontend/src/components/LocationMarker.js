import React, { useEffect, useState } from 'react';
import { Marker, Tooltip, useMap } from 'react-leaflet';

import L from 'leaflet';


const LocationMarker = ({ lat, lng, hospitalInfo }) => {


    const [position, setPosition] = useState(null);
    const [iconSize, setIconSize] = useState([25, 25]);
    const [logo, setLogo] = useState('current-location');

    const icon = L.icon({ iconUrl: `/leaflet_images/${logo}.png`, iconSize: iconSize, });

    const map = useMap();

    useEffect(() => {
        map.locate().on("locationfound", function (e) {
            setPosition(e.latlng);

            map.flyTo(e.latlng, 13);
        });

    }, [map]);

    useEffect(() => {
        if (lat !== null && lng !== null) {
            setLogo("hospital")
            setIconSize([40, 40])
            map.flyTo(position, 15);
        }
    }, [map, position]);

    useEffect(() => {
        setPosition({ lat: lat, lng: lng });

        return () => {
            setPosition(null)
        };
    }, [lat, lng]);


    return position === null ? null : (
        <Marker position={position} icon={icon}>
            <Tooltip direction='top' >
                {hospitalInfo ? hospitalInfo : "You are here."}

            </Tooltip>
        </Marker>
    );
};

export default LocationMarker;

