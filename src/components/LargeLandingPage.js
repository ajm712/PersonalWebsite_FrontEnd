import React from 'react';
import LargeNavbar2 from "./LargeNavbar2";

export default function LargeLandingPage() {
    return (
    <div>
            {< LargeNavbar2 /> }
            <section id="about" className="h-screen">
            <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center mt-16">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Austin.
                    </h1>
                    <h1 className="mb-8 leading-relaxed text-2xl">
                            I'm a Software Engineer looking to make your web application / website a reality!
                    </h1>
                        <p className="mb-8 leading-relaxed">
                            I specialize in creating robust cloud hosted web applications and websites using the latest and greatest technologies.
                            With my extensive professional experience in the software industry in mind, I am more than confident that I can create an amazing, robust web app, mobile app, api, or website for you that
                            will exceed your expectations and provide value for your business.
                        {/*On this site that I created from scratch (almost), you will find my professional experience and some side project apps that I am working on.*/}
                        {/*Click the Contact Me button below to reach out to me and we can start the process of creating an amazing web app or website for you!*/}
                        </p>
                    <div className="flex justify-center">
                    {/*<a*/}
                    {/*    href="https://www.fiverr.com/austinmarkham"*/}
                    {/*    className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">*/}
                    {/*    Fiverr*/}
                    {/*</a>*/}
                    {/*<a*/}
                    {/*    href="#projects//"*/}
                    {/*    className="ml-4 text-gray-400 bg-gray-800 border-0 py-2 px-8 hover:bg-gray-700 hover:text-green rounded text-xl">*/}
                    {/*    Contact Me*/}
                    {/*        </a>*/}
                            {/*<button*/}
                            {/*    className="text-white bg-green-600 border-0 py-2 px-8 hover:bg-gray-800 rounded text-xl">*/}
                            {/*    <a href="https://www.linkedin.com/in/austin-markham-b21936123/">*/}
                            {/*        Contact Me*/}
                            {/*        */}{/*<img className="" src={process.env.PUBLIC_URL + "/linkedin-logo.png"} alt="Logo" />*/}
                            {/*    </a>*/}
                            {/*</button>*/}
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                    className="object-cover object-center rounded"
                    alt="hero"
                    src="./coding.svg"
                    />
                </div>
            </div>
        </section>
    </div>
  );
}
