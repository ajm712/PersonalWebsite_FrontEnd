import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WebApps from "./Pages/WebApps";
import MainPage from "./components/MainPage";
import CryptoApp from "./components/CryptoApp";
import AboutThisSite from "./components/AboutThisSite";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

export default function App() {
    return (
        <main className="text-gray-300 font-semibold bg-gradient-to-l from-cyan-500 to-blue-500 body-font">
          <Router>
                <Routes>
                    <Route path='/WebApps' element={<WebApps />} />
                    <Route path='/CryptoApp' element={<CryptoApp />} />
                    <Route path='/AboutThisSite' element={<AboutThisSite />} />
                    <Route path='/Experience' element={<Experience />} />
                    <Route path='/Skills' element={<Skills />} />
                    <Route path = '/' element={<MainPage />} />
                </Routes>
          </Router>
        </main>
    );
}