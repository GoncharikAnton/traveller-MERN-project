import React, {useContext, useEffect, useState} from 'react'
import {BrowserRouter} from "react-router-dom";
import {useRoutes} from "./Routes/routes";
import {AuthContext} from "./Context/AuthContext";
import Header from "./Layouts/Header/Header";
import Footer from "./Layouts/Footer/Footer";
import {useAuth} from "./Hooks/auth.hook";

import './App.css';
import 'materialize-css';
import Loader from "./Components/Loader/Loader";

function App() {
    const {token, login, logout, userId} = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated)


    return (
        <AuthContext.Provider value={{token, login,logout, userId, isAuthenticated}}>
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    {routes || <Loader/>}
                    <Footer/>
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
