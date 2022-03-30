import { useLocation} from 'react-router-dom'
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import LoginRegister from "../layouts/main/LoginRegister/LoginRegister";
import HomePage from "../layouts/main/HomePage/HomePage";

export function RequireAuth({ children }: { children: JSX.Element }) {
    let auth = useContext(AuthContext);
    // let location = useLocation();

    if (!auth.token) {
        return <LoginRegister/>
    }
    return children;
}

export function RequireAdminAuth({ children }: { children: JSX.Element }) {
    let auth = useContext(AuthContext);
    if (!auth.token) {
        return <LoginRegister/>
    }else if(auth.role !== 'admin'){
        return <HomePage/>
    }
    return children;
}