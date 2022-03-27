import React from "react";
import {Route, Routes, Navigate, useLocation} from "react-router-dom";
import HomePage from "../Layouts/Main/HomePage/HomePage";
import AllToursPage from "../Layouts/Main/AllToursPage/AllToursPage";
import AboutUsPage from "../Layouts/Main/AboutUsPage/AboutUsPage";
import TourDetailPage from "../Layouts/Main/TourDetailPage/TourDetailPage";
import LoginRegister from "../Layouts/Main/LoginRegister/LoginRegister";
import Header from "../Layouts/Header/Header";
import Footer from "../Layouts/Footer/Footer";


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

    // const location = useLocation()
    // console.log(location)

    if (isAuthenticated) {
        return (
            <>
                {/*<Header/>*/}
                <Routes>
                    <Route path={'/'} exact element={<HomePage props={props}/>}/>

                    <Route path={'/tours'} exact element={<AllToursPage/>}/>

                    <Route path={'/blogs'} exact element={<AllToursPage/>}/>

                    <Route path={'/about_us'} exact element={<AboutUsPage/>}/>

                    <Route path={'/contacts'} exact element={<HomePage/>}/>

                    <Route path={'/detail/:id'} element={<HomePage/>}/>


                    <Route
                        path="*"
                        element={<Navigate to="/"/>}
                    />
                </Routes>
                {/*<Footer/>*/}
            </>

        )
    }
    return (
        <>
            {/*<Header/>*/}
            <Routes>
                <Route path={'/'} exact element={<HomePage/>}/>

                <Route path={'/tours'} exact element={<AllToursPage/>}/>

                <Route path={'/blogs'} exact element={<AllToursPage/>}/>

                <Route path={'/login'} exact element={<LoginRegister/>}/>

                <Route path={'/about_us'} exact element={<AboutUsPage/>}/>

                <Route path={'/tours/:id'} element={<TourDetailPage/>}/>


                <Route
                    path="*"
                    element={<Navigate to="/"/>}
                />
            </Routes>
            {/*<Footer/>*/}
        </>
    )
}
