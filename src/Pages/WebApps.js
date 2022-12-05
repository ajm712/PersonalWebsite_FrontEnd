import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function WebApps() {
    const navigate = useNavigate();

    const navigateToCryptoApp = () => {
        // 👇️ navigate to /contacts
        navigate('../components/CryptoApp');
    };
    return (
        <main>
        <Navbar />
        <div className="h-screen text-center mb-50 py-8">
            <h1 className="py-2" >Click a button below to navigate to an app</h1>
            <button
                className="text-white bg-sky-500 border-0 py-3 px-6 focus:outline-none hover:bg-green-400 rounded-full text-lg "
                onClick={navigateToCryptoApp} >
                Crypto App
            </button>
            </div>
        </main>
    );
};