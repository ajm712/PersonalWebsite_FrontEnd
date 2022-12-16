import React from "react";
import Navbar from "./Navbar";

export default function MobileLandingPage() {
    return (
        <div>
            { <Navbar /> }
            <section id="about">
                <div className="container px-5 py-20 mx-auto h-full">        
                    <div className="text-center mb-20 text-vase">
                        <div className="inline-block mb-4">
                            <img
                                className="object-cover object-center rounded"
                                alt="hero"
                                src="./coding.svg"
                            />
                        </div>
                        {/*<CommandLineIcon className="w-24 inline-block mb-4 text-sky-700" />*/}
                        <h1 className="sm:text-4xl text-4xl text-white mb-3">
                            Hi, I'm Austin, welcome to my website!
                        </h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            I'm a Software Engineer looking to make your web application / website a reality!
                            I specialize in creating robust cloud hosted web applications and websites using the latest and greatest technologies.
                            If your app idea exceeds the scope of my Fiverr packages (small to medium sized apps), click the adjacent Contact Me link to contact me!
                        </p><br></br>
                        <p className="mb-8 leading-relaxed">
                            With my extensive professional experience in the software industry in mind, I am more than confident that I can create an amazing, robust web app, mobile app, api, or website for you that
                            will exceed your expectations and provide value for your business.
                        </p>
                        {/*<a*/}
                        {/*    href="#contact//"*/}
                        {/*    className="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-2xl">*/}
                        {/*    Contact Me*/}
                        {/*</a>*/}
                        {/*<a*/}
                        {/*    href="https://www.fiverr.com/austinmarkham"*/}
                        {/*    className="ml-6 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-2xl">*/}
                        {/*    Fiverr*/}
                        {/*</a>*/}

                    </div>
                </div>
            </section>
        </div>
    );
}