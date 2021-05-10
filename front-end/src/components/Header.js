import React from 'react';
// шапка страницы
const Header = ({setToken}) => {
    return (
        <div className="header">
            <div className="header__label">Route Tracker</div>
            <div><button className="header__logout" onClick={() => setToken(false)}>Log out</button></div>
        </div>
    );
}

export default Header;