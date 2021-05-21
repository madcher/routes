import React from 'react';
// шапка страницы
const Header = ({setToken, route, setRoute}) => {

    const menuHandler = (e) => {
        const menuId = e.currentTarget.id;
        setRoute(menuId);
    };
    return (
        <div className="header">
            <div className="header__content">
                <div className="header__label">Route Tracker</div>
                <div className="header_menu">
                    <input
                        type="button"
                        value="Map"
                        className="header__menu-el"
                        id="map" 
                        onClick={menuHandler}
                        style={{ textDecoration: route === 'map' ? 'underline' : 'none'}}
                    />
                    <input
                        type="button"
                        value="Routes"
                        className="header__menu-el"
                        id="routes" 
                        onClick={menuHandler}
                        style={{ textDecoration: route === 'routes' ? 'underline' : 'none'}}
                    />
                </div>
            </div>
            <div><button className="header__logout" onClick={() => setToken(false)}>Log out</button></div>
        </div>
    );
}

export default Header;