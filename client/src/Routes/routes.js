import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import {HomePage} from "../Pages/HomePage/HomePage";
import {AllToursPage} from "../Pages/AllToursPage/AllToursPage";


const props = {
    title: 'Welcome to Traveller!',
    description: 'We are glad to see you on our web-site! \n' +
        'Here you can share your opinion about all your travels all over the world! And of-course you can take some;)\n' +
        'Enjoy!',
    rating: null,
    author: null,
    img: null
}

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path={'/'} exact element={<HomePage props={props}/>}/>

                <Route path={'/tours'} exact element={<AllToursPage/>}/>

                <Route path={'/blogs'} exact element={<HomePage/>}/>

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

            <Route path={'/tours'} exact element={<AllToursPage/>}/>

            <Route path={'/login_register'} exact element={<HomePage/>}/>

            <Route
                path="*"
                element={<Navigate to="/"/>}
            />
        </Routes>
    )
}
