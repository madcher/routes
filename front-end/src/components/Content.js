import React, {useEffect, useState, useRef } from 'react';
import MapComponent from './MapComponent';
import Aim from '../icons/aim'
import { addPoint, initWebSocket, getPoints } from '../services/service';
import { initialMapState, CENTER, INITZOOM } from '../consts';
import AddPointComponent from './AddpointComponent'


// содержания страницы
const Content = ({token}) => {
    const [state, setState] = useState(initialMapState);
    const [ map, setMap ] = useState(null);
    const [points, setPoints] = useState([]);
    
    useEffect(() => {
        getPoints(setPoints, token)
    }, []);

    useEffect(() => {
        if (!points.length) {
            return;
        }
        const lastPoint = points[points.length-1];
        const lastCoord = [lastPoint.lat, lastPoint.lng];
        map.flyTo(lastCoord, INITZOOM);
    }, [points]);

    const socketMessageHandler = () => {
        getPoints(setPoints, token);
    }
    
    // worker
    useEffect(() => {
        initWebSocket(socketMessageHandler);
    }, []);

    const goToCenter = () => {
        map.flyTo(CENTER, INITZOOM);
    }

    const addPointHandler = (data) => {
        addPoint(data, setPoints, token);
    };
    
    return (
        <div className="content">
            <AddPointComponent callback={addPointHandler} />
            <div className="center-menu">
                <div><Aim/></div>
                <div>
                    <button type="button" className="auth__input auth_button" onClick={goToCenter}>go</button>
                </div>
            </div>
            <div id="mapid">
                <MapComponent state={state} setMap={setMap} points={points}/>
            </div>
        </div>
    );
}

export default Content;