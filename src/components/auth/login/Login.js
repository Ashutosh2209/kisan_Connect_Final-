import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login, register } from "../../../actions/userAction";
import {index} from "../../../reducers/index";

//export default class Login extends Component
const Login = ({history}) => {

    const dispatch = useDispatch();
    const isAuthenticated  = useSelector(
        (state) => state.users
      );

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(login(loginEmail, loginPassword));
    }

    


    useEffect(() => {
        
        if (isAuthenticated) {
        //   login();
           // history.push("/account");
        }
      }, [dispatch,history,  isAuthenticated]);
    //render() {
        return (
            <div>
                {/*banner*/}
                <div className="banner-top">
                    <div className="container">
                        <h3>Login</h3>
                        <h4><Link to="/">Home</Link><label>/</label>Login</h4>
                        <div className="clearfix"> </div>
                    </div>
                </div>
                {/*login*/}
                <div className="login">
                    <div className="main-agileits">
                        <div className="form-w3agile">
                            <h3>Login</h3>
                            <form action="#" method="post" onSubmit={loginSubmit}>
                                <div className="key">
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        required
                                        value={loginEmail}
                                        onChange={(e) => setLoginEmail(e.target.value)}
                                    />
                                    <div className="clearfix" />
                                </div>
                                <div className="key">
                                    <i className="fa fa-lock" aria-hidden="true" />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        required
                                        value={loginPassword}
                                        onChange={(e) => setLoginPassword(e.target.value)}
                                    />
                                    <div className="clearfix" />
                                </div>
                                <input type="submit" defaultValue="Login" />
                            </form>
                        </div>
                        <div className="forg">
                            <Link to="#" className="forg-left">Forgot Password</Link>
                            <Link to="/register" className="forg-right">Register</Link>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
            </div>

        )
    //}
}

export default Login;
