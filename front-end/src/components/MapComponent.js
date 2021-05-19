import React, {useState} from 'react';
import Info from './Info';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import './map.css';

// указываем путь к файлам marker
L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";



const MapComponent = ({state, setMap, points}) => {
    

    const center = [state.lat, state.lng];

    return (
        <MapContainer
            zoom={state.zoom}
            center={center}
            whenCreated={setMap}
        >
            <TileLayer
                url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
            />
            {
                points.map(point => {
                    return (
                        <Marker position={[point.lat, point.lng]} key={point.datetime}>
                            <Popup>
                                <Info point={point} />
                            </Popup>
                        </Marker>
                    );
                })
            }
        </MapContainer>
    );
};

export default MapComponent;