import React, {useEffect, useLayoutEffect, useState} from 'react'
import {BrowserRouter} from "react-router-dom";
import {useRoutes} from "./routes/routes";
import {AuthContext} from "./context/AuthContext";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import {useAuth} from "./hooks/auth.hook";
import Loader from "./components/Loader/Loader";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import store from './redux/store'
import './App.css';
import 'materialize-css';
import {Provider} from "react-redux";


function App() {
    // console.log('render')
    const {token, login, logout, userId, role} = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated, role)

    return (
        <Provider store={store}>
            <AuthContext.Provider value={{token, login, logout, userId, isAuthenticated, role}}>
                <BrowserRouter>
                    <ScrollToTop/>
                    <div className="App">
                        <Header/>
                        {routes || <Loader/>}
                        <Footer/>
                    </div>
                </BrowserRouter>
            </AuthContext.Provider>
        </Provider>

    );
}

export default App;
