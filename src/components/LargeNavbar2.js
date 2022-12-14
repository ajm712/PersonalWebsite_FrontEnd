import React from "react";
import { Link } from "react-router-dom";

export default function LargeNavbar2() {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="/" className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl">
                        Austin Markham
                </Link>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
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
        </header>
    );
}
