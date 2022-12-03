import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
                <a href="#" className="title-font font-medium text-white mb-4 md:mb-1">
                    <a href="../#about" className="ml-3 text-xl hover:text-green-400">
                        Austin Markham
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-sky-700	flex flex-wrap items-center text-base justify-center">
                    <a href="../#experience" className="mr-5 hover:text-green-400">
                        Experience
                    </a>
                    <a href="../#skills" className="mr-5 hover:text-green-400">
                        Skills
                    </a>
                    <Link to="/Pages/WebApps" className="mr-5 hover:text-green-400">
                        Web Apps
                    </Link>
                    <Link to="/Pages/AboutThisSite" className="mr-5 hover:text-green-400 text-rigth">
                        About This Site
                    </Link>
                </nav>
            </div>
        </header>
    );
}