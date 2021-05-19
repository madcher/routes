import workerFunction from '../serviceWorker';

// функция авторизации
export const loginFunc = (e, setToken, setError) => {
    const data = new FormData(e.target);
    const login = data.get('login');
    const password = data.get('password');
    console.log(login, password);
    fetch('/api/authorization', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ login, password }),
    }).then(res => {
        if (!res.ok) {
            console.log("HTTP status " + res.status);
            throw Error;
        }
        return res.json();
    }).then(result => {
        setToken(result.token);
        setError(false);
    }).catch(err => {
        setError(true);
        console.log(err)
    });
};

// получение маршрутов
export const getPoints = (setPoints, token) => {
    fetch('/api/get', {
        method: 'GET',
        headers: {'token': token}
    }).then(response => response.json()).then(data => {
        setPoints(data);
    }).catch(err => console.log(err));
}
// добавление точки
export const addPoint = (query, setPoints, token) => {
    fetch('/api/addpoint', {
        method: 'POST',
        headers: {'token': token, 'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(query)
    }).then(res => {
        getPoints(setPoints, token);
    }).catch(err => console.log(err));
}

export const initWebSocket = (callback) => {
    var dataObj = '(' + workerFunction + ')();'; // here is the trick to convert the above fucntion to string
    var blob = new Blob([dataObj.replace('"use strict";', '')]); // firefox adds "use strict"; to any function which might block worker execution so knock it off

    var blobURL = (window.URL ? window.URL : window.webkitURL).createObjectURL(blob, {
        type: 'application/javascript; charset=utf-8'
    });

    const myWorker = new Worker(blobURL);
    //const myWorker = new Worker('serviceWorker.js');
    const message = { addThis: {num1: 1, num2: 10} };
    myWorker.postMessage(message);
    myWorker.onmessage = ({data}) => {
        const {error, hint, message} = data;
        if (error) {
            alert(error);
        }

        if (message) {
            console.log(message);
            callback();
        }
    }
};