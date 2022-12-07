import React from "react";
import { Link } from "react-router-dom";

export default function LargeNavbar() {
    return (
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row">
            <Link to="/" className=" ml-3 text-2xl font-bold text-white">
                Austin Markham
            </Link>
            <nav className="font-semibold md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-lg">
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
    );
}