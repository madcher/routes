// страница авторизации
import React, {useEffect, useState} from 'react';
import { loginFunc } from '../services/service';

const Auth = ({setToken}) => {
const [error, setError] = useState(false);
const submitHandler = (e) => {
    e.preventDefault();
    loginFunc(e, setToken, setError)
};

return(<div className="auth__container">
        <form className="auth__form" onSubmit={submitHandler}>
            <label className="auth__label">Login</label>
            <input className="auth__input" type="text" placeholder="login" name="login"/>
            <label className="auth__label">Password</label>
            <input className="auth__input" type="password" placeholder="" name="password"/>
            {error && <div className="auth_error">Invalid login or password</div>}
            <button type="submit" className="auth__input auth_button">Submit</button>
        </form>
    </div>);
}

export default Auth;