import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center ">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-white">
                        Hi, I'm Austin.
                        <br className="hidden lg:inline-block" />
                        Welcome to my website!
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Here you will learn about my professional experience, skills, and aspirations.
                    </p>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded-lg border-gray-800"
                        alt="hero"
                        src="./Professional_headshot_1.jpg"
                    />
                </div>
            </div>
        </section>
    );
}