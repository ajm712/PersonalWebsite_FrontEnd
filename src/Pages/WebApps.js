import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function WebApps() {
    return (
        <main>
        <Navbar />
        <div className="h-screen text-center mb-50 py-8">
            <h1 className="py-2" >Click a button below to navigate to an app</h1>
            <button
                    className="text-white bg-sky-700 border-0 py-2.5 px-6 hover:bg-green-600 rounded-full text-lg">
                    <Link to="/CryptoApp">
                        Crypto App
                    </Link>          
            </button>
            </div>
        </main>
    );
};