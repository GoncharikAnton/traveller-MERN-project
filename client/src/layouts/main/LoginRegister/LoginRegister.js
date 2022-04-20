import React, {useContext, useEffect, useState} from 'react'
import {AuthContext} from "../../../context/AuthContext";
import axios from "axios";
import {useNavigate} from "react-router";

import styles from './LoginRegister.module.css'

const LoginRegister = () => {

    const [registration, setRegistration] = useState(false)
    const auth = useContext(AuthContext)
    const [form, setForm] = useState({
        name: '', email: '', password: '', passwordConfirm: ''
    })
    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const navigate = useNavigate()

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

    const registerHandler_1 = () => {
        setRegistration(true)
    }
    const registerHandler = async () => {
        setRegistration(false)

        try {
            const response = await axios.post('/api/v1/users/signup', {...form})
            auth.login(response.data.token, response.data.data.user._id, response.data.data.user.role)
        } catch (e) {
        }
    }


    return (
        <>
            <div className={`row ${styles}`}>
                <div className="container">
                    {/*<h1><img src="/img/svg/logo.svg" alt=""/>Traveller</h1>*/}

                    <div className="card cyan ">
                        <div className="card-content white-text">
                            <span className="card-title black-text bold-text">Authorization</span>
                        </div>

                        {!registration ? <>
                                <div>
                                    <div className="input-field">
                                        <input
                                            id="email"
                                            type="email"
                                            name={'email'}
                                            className={`validate ${styles['yellow-input']} `}
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
                                        {auth.isAuthenticated ? navigate('/')
                                            : null
                                        }

                                    </button>

                                    <button
                                        className={'btn grey lighten-1 black-text'}
                                        onClick={registerHandler_1}
                                        // disabled={loading}
                                    >Registration
                                    </button>

                                </div>
                            </> :
                            <>
                                <div>
                                    <div className="input-field">
                                        <input
                                            id="name"
                                            type="text"
                                            name={'name'}
                                            className={`${styles['yellow-input']}`}
                                            value={form.name}
                                            onChange={changeHandler}
                                        />
                                        <label htmlFor="Name">Name</label>
                                    </div>

                                    <div className="input-field">
                                        <input
                                            id="email"
                                            type="email"
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
                                    <div className="input-field">
                                        <input
                                            id="passwordConfirm"
                                            type="password"
                                            name={'passwordConfirm'}
                                            className={`${styles['yellow-input']}`}
                                            value={form.passwordConfirm}
                                            onChange={changeHandler}
                                        />
                                        <label htmlFor="password_confirm">Password confirm</label>
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
                                        onClick={registerHandler}
                                    >
                                        Registration
                                        {auth.isAuthenticated ? navigate('/')
                                            : null
                                        }
                                    </button>

                                </div>
                            </>
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default LoginRegister;