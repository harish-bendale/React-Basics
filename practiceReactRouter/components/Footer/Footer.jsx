import React from "react"
import { Link, NavLink } from "react-router-dom";

function Footer() {
    return (
        <div className="flex flex-wrap justify-center bottom-12 inset-x-0 px-4 py-1 gap-3">
            <Link to='#'>
                Privacy Policy
            </Link>
            <NavLink to="/About">
                About
            </NavLink>
            <NavLink to="/Contact">
                Contact
            </NavLink>
        </div>
    )
}

export default Footer;