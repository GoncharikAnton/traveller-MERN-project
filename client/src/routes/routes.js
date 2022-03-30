import React, {useContext} from "react";
import {Route, Routes, Navigate, useLocation} from "react-router-dom";
import HomePage from "../layouts/main/HomePage/HomePage";
import AllToursPage from "../layouts/main/AllToursPage/AllToursPage";
import AboutUsPage from "../layouts/main/AboutUsPage/AboutUsPage";
import TourDetailPage from "../layouts/main/TourDetailPage/TourDetailPage";
import LoginRegister from "../layouts/main/LoginRegister/LoginRegister";
import Header from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";
import ContactsPage from "../layouts/main/ContactsPage/ContactsPage";
import CreateTourPage from "../layouts/main/CreateTourPage/CreateTourPage";
import DeleteTourPage from "../layouts/main/DeleteTourPage/DeleteTourPage";
import {AuthContext} from "../context/AuthContext";
import CartPage from "../layouts/main/CartPage/CartPage";
import {RequireAdminAuth, RequireAuth} from "./RequireAuth";


export const useRoutes = () => {


    return (
        <Routes>
            <Route path={'/'} exact element={<HomePage/>}/>

            <Route path={'/tours'} exact element={<AllToursPage/>}/>

            <Route path={'/blogs'} exact element={<AllToursPage/>}/>

            <Route path={'/create_tour'} exact element={
                <RequireAuth role={'admin'} to={'/create_tour'}>
                    <CreateTourPage/>
                </RequireAuth>
            }/>

            <Route path={'/delete_tour'} exact element={
                <RequireAdminAuth >
                    <DeleteTourPage/>
                </RequireAdminAuth>
            }/>

            <Route path={'/about_us'} exact element={<AboutUsPage/>}/>

            <Route path={'/tours/:id'} element={<TourDetailPage/>}/>

            <Route path={'/contacts'} element={<ContactsPage/>}/>

            <Route path={'/cart/:id'} element={
                <RequireAuth>
                    <CartPage/>
                </RequireAuth>
            }/>

            <Route path={'/profile'} element={<CartPage/>}/>

            <Route path={'/login'} element={<LoginRegister/>}/>

            <Route
                path="*"
                element={<Navigate to="/"/>}
            />
        </Routes>

    )
}

