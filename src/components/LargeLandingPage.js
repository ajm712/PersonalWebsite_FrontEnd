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
                        Hi, I'm Austin!
                    </h1>
                    <h1 className="mb-8 leading-relaxed text-2xl">
                            I'm a Software Engineer who loves building innovative apps with the latest and greatest technologies.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        On this site that I created from scratch (almost), you will find my professional experience and some side project web apps that I am working on.
                            I also do freelancing on the side. Click the first link below to navigate to my Fiverr page and I can make your app idea a reality!
                            If your app idea exceeds the scope of my Fiverr packages (small to medium sized apps), click the adjacent Contact Me link to contact me!
                    </p>
                    <div className="flex justify-center">
                    <a
                        href="https://www.fiverr.com/austinmarkham"
                        className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                        Fiverr
                    </a>
                    <a
                        href="#projects//"
                        className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        Contact Me
                    </a>
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
