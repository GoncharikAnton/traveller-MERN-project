import React from "react";
import {Route, Routes, Navigate, useLocation} from "react-router-dom";
import HomePage from "../Layouts/Main/HomePage/HomePage";
import AllToursPage from "../Layouts/Main/AllToursPage/AllToursPage";
import AboutUsPage from "../Layouts/Main/AboutUsPage/AboutUsPage";
import TourDetailPage from "../Layouts/Main/TourDetailPage/TourDetailPage";
import LoginRegister from "../Layouts/Main/LoginRegister/LoginRegister";
import Header from "../Layouts/Header/Header";
import Footer from "../Layouts/Footer/Footer";
import ContactsPage from "../Layouts/Main/ContactsPage/ContactsPage";
import CreateTourPage from "../Layouts/Main/CreateTourPage/CreateTourPage";



export const useRoutes = isAuthenticated => {

    // const location = useLocation()
    // console.log(location)

    if (isAuthenticated) {
        return (
            <>
                {/*<Header/>*/}
                <Routes>
                    <Route path={'/'} exact element={<HomePage/>}/>

                    <Route path={'/tours'} exact element={<AllToursPage/>}/>

                    <Route path={'/blogs'} exact element={<AllToursPage/>}/>

                    <Route path={'/create_tour'} exact element={<CreateTourPage/>}/>

                    <Route path={'/about_us'} exact element={<AboutUsPage/>}/>

                    <Route path={'/detail/:id'} element={<HomePage/>}/>

                    <Route path={'/contacts'} element={<ContactsPage/>}/>

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

                <Route path={'/contacts'} element={<ContactsPage/>}/>


                <Route
                    path="*"
                    element={<Navigate to="/"/>}
                />
            </Routes>
            {/*<Footer/>*/}
        </>
    )
}
