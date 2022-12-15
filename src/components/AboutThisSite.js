import { WindowIcon } from "@heroicons/react/24/solid";
import React from "react";
import Navbar from "../components/Navbar";
import { siteTechnologies } from "../data";

export default function AboutThisSite() {
    return (
        <div>
            {<Navbar />}
            <section id="aboutthissite">
                <div className="container py-10 mx-auto h-full justify-center mt-28">
                    <div className="text-center mb-24 ">
                        {/*<img src={process.env.PUBLIC_URL + "/Professional_headshot_1.jpg"} alt="logo" className="w-40 mb-4 text-sky-700 rounded-lg" />*/}
                        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-3">
                            About this site
                        </h1>
                        <p className="text-base text-white leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            This website outlines my professional software experience and skills 
                            With my extensive professional experience in the software industry in mind, I am more than confident that I can create an amazing, robust web app or website for you that
                            will exceed your expectations and provide value for your business.
                        </p>
                    </div>
                    <div className="text-center mb-10 items-center">
                        <WindowIcon className="w-24 inline-block text-sky-700" />
                        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white">
                            Technologies used for this site
                        </h1>
                    </div>
                    <div className="flex flex-wrap sm:mx-auto sm:mb-2 justify-center mb-16">
                            {siteTechnologies.map((tech) => (
                                <div
                                    key={siteTechnologies.technologyName}
                                    className="w-100 p-3">
                                    <div className="flex relative tracking-tight text-center">
                                        <div className="px-8 py-3 relative border-4 border-gray-800 bg-gray-800 rounded-lg">
                                            <h2 className="tracking-wide text-2xl title-font font-medium text-sky-500 mb-1">
                                                {tech.technologyName}
                                            </h2>
                                            <h1 className="title-font text-m font-medium text-white mb-3">
                                                {tech.category}
                                            </h1>
                                            <p className="leading-relaxed">{tech.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className="text-center mt-52">
                        {/*<img src={process.env.PUBLIC_URL + "/Professional_headshot_1.jpg"} alt="logo" className="w-40 mb-4 text-sky-700 rounded-lg" />*/}
                        <h1 className="sm:text-2xl text-sm text-white mb-3">
                            Resources Used
                        </h1>
                        <p className="text-sm leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            Site layout base design - <a href="https://www.freecodecamp.org/news/build-portfolio-website-react/" className="text-gray-800">link</a><br></br>
                            Hamburger menu icon for mobile - <a href="https://medium.com/@designbygio/hamburger-menu-with-react-and-tailwind-css-7ddd8c90a082" className="text-gray-800">link</a><br></br>
                            CSS - <a href="https://tailwindcss.com/" className="text-gray-800">link</a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}