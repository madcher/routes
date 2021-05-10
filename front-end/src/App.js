import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Auth from './components/Auth';

// компонент приложения
const App = () => {
    const [token, setToken] = useState(null);
    if (!token) {
        return (<Auth setToken={setToken} />)
    }
    return(<div>
            <Header setToken={setToken}/>
            <Content token={token}/>
        </div>);
}

export default App;

