import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';


function Layout() {
    return (
        <div className="w-full h-screen duration-200">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout;