import React, {useContext, useEffect, useState} from 'react'
import {AuthContext} from "../../../context/AuthContext";
import {Link, Navigate} from "react-router-dom";

import styles from './LoginRegister.module.css'
import Header from "../../header/Header";
import axios from "axios";

const LoginRegister = () => {

    const auth = useContext(AuthContext)
    const [form, setForm] = useState({
        email: '', password: ''
    })
    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    useEffect(() => {
        window.M.updateTextFields()
    }, []);

    const loginHandler = async () => {
        try {
            const response = await axios.post('/api/v1/users/login', {...form})
            auth.login(response.data.token, response.data.data.user._id, response.data.data.user.role)

        } catch (e) {
        }
    }
    return(
        <>
            <div className={`row ${styles}`}>
                <div className="container">
                    {/*<h1><img src="/img/svg/logo.svg" alt=""/>Traveller</h1>*/}

                    <div className="card cyan ">
                        <div className="card-content white-text">
                            <span className="card-title black-text bold-text">Authorization</span>
                        </div>

                        <div>
                            <div className="input-field">
                                <input
                                    id="email"
                                    type="text"
                                    name={'email'}
                                    className={`${styles['yellow-input']}`}
                                    value={form.email}
                                    onChange={changeHandler}

                                />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="input-field">
                                <input
                                    id="password"
                                    type="password"
                                    name={'password'}
                                    className={`${styles['yellow-input']}`}
                                    value={form.password}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="password">Password</label>
                            </div>

                        </div>

                        <div className="card-action">
                            <button
                                className={'btn yellow darken-4'}
                                style=
                                    {{
                                        marginRight: 10
                                    }}
                                // disabled={loading}
                                onClick={loginHandler}
                            >
                                Login
                                {auth.isAuthenticated ? <Navigate to={'/'}></Navigate>
                                : null
                                }

                            </button>
                            <button
                                className={'btn grey lighten-1 black-text'}
                                // onClick={registerHandler}
                                // disabled={loading}
                            >Registration
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LoginRegister;