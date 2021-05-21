import React, {useState} from 'react';
import Info from './Info';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from 'leaflet';
import './map.css';
import { carIcon, truckIcon, circleIcon } from '../consts';
// указываем путь к файлам marker
L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";


const MapComponent = ({state, setMap, points, routes}) => {
    

    const center = [state.lat, state.lng];

    let lastPoints = {};
    points.forEach(el => {
        lastPoints[el.carid] = el;
    });

    console.log(lastPoints);

    const limeOptions = { color: 'rgba(71,226,127,0.6)' }
    const polylines = Object.values(routes);
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
                        <Marker position={[point.lat, point.lng]} key={point.datetime} icon={circleIcon}>
                            <Popup>
                                <Info point={point} />
                            </Popup>
                        </Marker>
                    );
                })
            }
            {
                Object.values(lastPoints).map(point => {
                    return (
                        <Marker position={[point.lat, point.lng]} key={point.datetime + 'lastpoint'} icon={truckIcon}>
                            <Popup>
                                <Info point={point} />
                            </Popup>
                        </Marker>
                    );
                })
            }
            {
                polylines.map(line => {
                    return (
                        <Polyline pathOptions={limeOptions} positions={line} key={line}/>
                    );
                })
            }
                <Marker position={[55.732868, 37.510865]} icon={carIcon}>
                    <Popup>
                        police
                    </Popup>
                </Marker>
        </MapContainer>
    );
};

export default MapComponent;