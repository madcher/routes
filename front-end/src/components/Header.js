import React from 'react';
// шапка страницы
const Header = () => {
    return (
        <div className="header">
            <div className="header__label">my-courses</div>
            <div><button className="header__logout" onClick={() => {}}>Log out</button></div>
        </div>
    );
}

export default Header;