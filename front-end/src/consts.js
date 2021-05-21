import L from 'leaflet';
import car from './icons/car.png';
import truck from './icons/truck.png';
import circle from './icons/circle.svg';

export const INITZOOM = 14;

export const  initialMapState = {
    lat: 55.702868,
    lng: 37.530865,
    zoom: INITZOOM
};

export const CENTER = [55.702868, 37.530865 ];


export const carIcon = L.icon({
    iconUrl: car,
    iconRetinaUrl: car,
    iconSize: [18, 18],
    iconAnchor: [9, 9]
});

export const circleIcon = L.icon({
    iconUrl: circle,
    iconRetinaUrl: circle,
    iconSize: [10, 10],
    iconAnchor: [5, 5]
});

export const truckIcon = L.icon({
    iconUrl: truck,
    iconRetinaUrl: truck,
    iconSize: [18, 18],
    iconAnchor: [9, 9]
});