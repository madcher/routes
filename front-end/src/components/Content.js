import React, {useEffect, useState } from 'react';
import MapComponent from './MapComponent';
import Aim from '../icons/aim'
import { addPoint, initWebSocket, getPoints } from '../services/service';
import { initialMapState, CENTER, INITZOOM } from '../consts';
import AddPointComponent from './AddpointComponent';
import TableRoutes from './TableRoutes';


// содержания страницы
const Content = ({token, route}) => {
    const [state, setState] = useState(initialMapState);
    const [ map, setMap ] = useState(null);
    const [points, setPoints] = useState([]);
    const [routes, setRoutes] = useState({});

    useEffect(() => {
        getPoints(setPoints, setRoutes, token)
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
        getPoints(setPoints, setRoutes, token);
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
            {
                route === 'map' && (
                    <>
                        <AddPointComponent callback={addPointHandler} />
                        <div className="center-menu">
                            <div><Aim/></div>
                            <div>
                                <button type="button" className="auth__input auth_button" onClick={goToCenter}>go</button>
                            </div>
                        </div>
                        <div id="mapid">
                            <MapComponent state={state} setMap={setMap} points={points} routes={routes}/>
                        </div>
                    </>
                )
            }
            { route !== 'map' && <TableRoutes points={points} />}
        </div>
    );
}

export default Content;