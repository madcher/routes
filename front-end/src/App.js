import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Auth from './components/Auth';

// компонент приложения
const App = () => {
    const [token, setToken] = useState(null);
    const [route, setRoute] = useState('map');
    if (!token) {
        return (<Auth setToken={setToken} />)
    }
    return(<div>
            <Header setToken={setToken} route={route} setRoute={setRoute}/>
            <Content token={token} route={route}/>
        </div>);
}

export default App;

