import React, {useEffect} from 'react';
import Map from './Map';
import workerFunction from '../serviceWorker';

var dataObj = '(' + workerFunction + ')();'; // here is the trick to convert the above fucntion to string
var blob = new Blob([dataObj.replace('"use strict";', '')]); // firefox adds "use strict"; to any function which might block worker execution so knock it off

var blobURL = (window.URL ? window.URL : window.webkitURL).createObjectURL(blob, {
    type: 'application/javascript; charset=utf-8'
});

// содержания страницы
const Content = () => {
    useEffect(() => {
        const myWorker = new Worker(blobURL);
        //const myWorker = new Worker('serviceWorker.js');
        const message = { addThis: {num1: 1, num2: 10} };
        myWorker.postMessage(message);
        myWorker.onmessage = ({data}) => {
            const {error, hint, message} = data;
            if (error) {
                alert(error);
            }
            if (hint) {
                console.log(hint);
            }
            if (message) {
                console.log(message);
                // создаем уведомление
                if (Notification.permission === "granted") {
                    // Если разрешено, то создаем уведомление
                    var notification = new Notification(message);
                } else if (Notification.permission !== 'denied') {
                    Notification.requestPermission(function (permission) {
                        // Если пользователь разрешил, то создаем уведомление
                        if (permission === "granted") {
                            var notification = new Notification(message);
                        }
                    });
                }
            }
        }
        
    }, []);

    return (
        <div className="content">
            <div className="map-menu">
                <div>New point</div>
                <div>
                    <button type="button" className="auth__input auth_button" onClick={() => {}}>Add point</button>
                </div>
            </div>
            <div className="center-menu">
                <div>Go to center</div>
                <div>
                    <button type="button" className="auth__input auth_button" onClick={() => {}}>go</button>
                </div>
            </div>
            <Map/>
        </div>
    );
}

export default Content;