import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className="flex flex-col justify-center inset-x-0 px-4 py-1">
            <div className='flex flex-wrap justify-center gap-3'>
                <Link to="#">
                    Start
                </Link>
                <Link to="#">
                    Log In
                </Link>
            </div>

            <div className='flex flex-wrap justify-center gap-3'>
                <NavLink to="/" className = {({isActive}) => `text-black ${isActive ? "text-orange-700" : "text-gray-800"} `}>
                    Home
                </NavLink>
                <NavLink to="/About" className = {({isActive}) => `text-black ${isActive ? "text-orange-700" : "text-gray-800"} `}>
                    About
                </NavLink>
                <NavLink to="/Contact" className = {({isActive}) => `text-black ${isActive ? "text-orange-700" : "text-gray-800"} `}>
                    Contact
                </NavLink>
                <NavLink to="/github" className = {({isActive}) => `text-black ${isActive ? "text-orange-700" : "text-gray-800"} `}>
                    Github
                </NavLink>
            </div>
        </div>
    )
}

export default Header;