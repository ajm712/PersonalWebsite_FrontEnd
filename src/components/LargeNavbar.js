import React from "react";
import { Link } from "react-router-dom";

export default function LargeNavbar() {
    return (
        <div className="container flex items-center">
            <Link to="/" className="ml-24">
                <img src={process.env.PUBLIC_URL + "/Name_logo_3.png"} alt="Logo" /> 
            </Link>
            <div className="container flex justify-end">
                <nav className="font-semibold text-xl">
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