import React, {useEffect} from 'react';

const MapComponent = () => {
    useEffect(() => {
        const L = window.L;
        const mymap = L.map('mapid').setView([55.755826, 37.6173], 13);
        // url of tiles z - zoom , x - latitude, y - longitude
        const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        // tiles
        const tiles = L.tileLayer(tileUrl, {attribution: 'mymap'});
        tiles.addTo(mymap);
        L.Routing.control({      addWaypoints: false,
            draggableWaypoints: false,
            fitSelectedRoutes: false,
            collapsible: false,
            show: false,
            waypoints: [
                L.latLng(55.755826, 37.6173),
                L.latLng(55.855826, 37.8173),
                L.latLng(55.955826, 37.9179)
            ]
        }).addTo(mymap);
    }, []);
    return (
        <div id="mapid"></div>
    );
};

export default MapComponent;