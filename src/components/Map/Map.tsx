import React, { useState, useEffect } from 'react';
import ReactMapGl, { Marker, Popup } from "react-map-gl"
import style from './Map.module.scss';


const YOUR_MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiYXJtb3RlbyIsImEiOiJjazRhN2U4NHgwMTRnM2VteHgwMXV6aGFyIn0.lP2XFXwnZA_A1bGt0C4YFw';

const MyMap = (props: any) => {

    const [viewport, setViewport] = useState({
        latitude: props.latitude,
        longitude: props.longitude,
        width: 270,
        height: 185,
        zoom: 8,
    });

   

    const [selectStation, setSelectedStation] = useState(null);
    useEffect(() => {
        const listener = (e: any) => {
            if (e.key === "Escape") {
                setSelectedStation(null);
            }
        };
        window.addEventListener("keydown", listener)
        return () => {
            window.removeEventListener('keydown', listener)
        }
    }, []);

    return (

        <div className={style.MyMap}>
            <ReactMapGl {...viewport}
                mapboxApiAccessToken={YOUR_MAPBOX_ACCESS_TOKEN}
                mapStyle="mapbox://styles/armoteo/ck4b2mnej0z301cpcr47k5962"
                onViewportChange={(viewport) => {
                    setViewport(viewport)
                }}
            >
                <Marker key={props.name}
                    latitude={props.latitude}
                    longitude={props.longitude}

                >
                    <button className={style.MarkerBtn} onClick={(e) => {
                        e.preventDefault();
                        setSelectedStation(props.name);
                    }}>
                        <i className="fas fa-map-marker-alt">{}</i>
                    </button>
                </Marker>
                {selectStation ? (
                    <Popup
                        latitude={props.latitude}
                        longitude={props.longitude}
                        onClose={() => {
                            setSelectedStation(null);
                        }}
                    >
                        <div>{props.name}</div>
                    </Popup>
                ) : null}
            </ReactMapGl>
        </div>
    )
};

export default MyMap;