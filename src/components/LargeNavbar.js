import React from "react";
import { Link } from "react-router-dom";

export default function LargeNavbar() {
    return (
        <div className="container flex items-center justify-end">
            <Link to="/" className="container ">
                <img src={require('../images/Name_logo_4.png')} alt="Logo" />
            </Link>
        <div className="container items-center">
            <nav className="font-semibold text-lg">
                <Link to="/Experience" className="mr-5">
                    Experience
                </Link>
                <Link to="/Skills" className="mr-5">
                    Skills
                </Link>
                <Link to="/WebApps" className="mr-5">
                    Web Apps
                </Link>
                <Link to="/AboutThisSite" className="mr-5">
                    About
                </Link>
            </nav>
            </div>
            </div>
    );
}