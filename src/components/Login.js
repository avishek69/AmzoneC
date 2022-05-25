import React from 'react'
import './login.css';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
function Login() {
    const [{ }, dispatch] = useStateValue();
    const addUser = (event) => {
        dispatch({
            type: "ADD_USER",
            user: event.target.value
        })
        console.log(event.target.value)
    }
    const login = event => {
        event.preventDefault();

    }
    const register = event => {
        event.preventDefault();
    }
    const setUserName = (event) => {
        addUser(event);
    }
    return (
        <div className="login">
            <Link to="/">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    className="loginLogo"
                    alt="Logo" />
            </Link>
            <div className="loginContainer">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" onChange={setUserName} />
                    <h5>Password</h5>
                    <input type="password" />
                    <Link to="/">
                        <button
                            className="login-signInButton"
                            type="submit"
                        >Sign in</button>
                    </Link>
                </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button
                    className="login-registerButton"
                    onClick={register}
                >Create your Amazon account</button>
            </div>

        </div>
    )
}

export default Login