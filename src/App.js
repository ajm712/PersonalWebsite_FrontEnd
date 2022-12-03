import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes }
    from 'react-router-dom';
import WebApps from "./Pages/WebApps";
import MainPage from "./components/MainPage";
import CryptoApp from "./Pages/CryptoApp";
import AboutThisSite from "./Pages/AboutThisSite";

export default function App() {
    return (
        <main className="text-gray-300 bg-gray-900 body-font">
          <Router>
                <Routes>
                    <Route path='/Pages/WebApps' element={<WebApps />} />
                    <Route path='/Pages/CryptoApp' element={<CryptoApp />} />
                    <Route path='/Pages/AboutThisSite' element={<AboutThisSite />} />
                    <Route path = '/' element={<MainPage />} />
                </Routes>
          </Router>
        </main>
    );
}