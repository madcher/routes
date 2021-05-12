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
    fetch('/api/get-points', {
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
