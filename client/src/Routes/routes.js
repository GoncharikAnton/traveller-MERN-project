import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import {HomePage} from "../Pages/HomePage";


export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path={'/'} exact element={<HomePage/>}/>

                <Route path={'/blogs'} exact element={<HomePage/>}/>

                <Route path={'/tours'} exact element={<HomePage/>}/>

                <Route path={'/about_us'} exact element={<HomePage/>}/>

                <Route path={'/contacts'} exact element={<HomePage/>}/>

                <Route path={'/detail/:id'} element={<HomePage/>}/>


                <Route
                    path="*"
                    element={<Navigate to="/"/>}
                />
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path={'/'} exact element={<HomePage/>}/>

            <Route path={'/login_register'} exact element={<HomePage/>}/>

            <Route
                path="*"
                element={<Navigate to="/"/>}
            />
        </Routes>
    )
}
