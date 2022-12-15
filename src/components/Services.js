import { CodeBracketIcon } from "@heroicons/react/24/solid";
import React from "react";
import Navbar from "./Navbar"

export default function Services() {
    return (
        <div>
            {<Navbar />}
            <section id="skills">
              <div className="px-5 py-10 mx-auto sm:h-screen h-full">
                <div className="text-center mb-20">
                    <CodeBracketIcon className="w-24 inline-block mb-4 text-sky-700" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-3">
                      Software Services
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                      Lets make your dream app or website a reality! See below for what services I can provide for you and your business
                    </p>
                </div>
                    <div className="flex flex-wrap sm:mx-auto sm:mb-2 justify-center mb-16 w-100 p-3 relative tracking-tight text-center">
                        <div className="flex flex-col sm:flex-row basis-3 relative tracking-tight text-center justify-center">
                            <div className="px-8 py-3 relative border-4 border-gray-600 bg-gray-800 rounded-lg mb-4 ml-3">
                                <h2 className="tracking-wide text-xl title-font font-medium text-sky-500 mb-1">
                                    Mobile App Development
                                </h2>
                                <h1 className="text-m font-medium text-white mb-3">
                                    Mobile app development for android and IOS that will take your business to the next level.
                                </h1>
                                <p className="leading-relaxed">Placeholder</p>
                            </div>

                            <div className="px-8 py-3 relative border-4 border-gray-600 bg-gray-800 rounded-lg mb-4 ml-3">
                                <h2 className="tracking-wide text-xl title-font font-medium text-sky-500 mb-1">
                                    Backend Api Development
                                </h2>
                                <h1 className="title-font text-m font-medium text-white mb-3">
                                    Develop a robust api for your existing applications
                                </h1>
                                <p className="leading-relaxed">Placeholder</p>
                            </div>
                            <div className="px-8 py-3 relative border-4 border-gray-600 bg-gray-800 rounded-lg mb-4 ml-3">
                                <h2 className="tracking-wide text-2xl title-font font-medium text-sky-500 mb-1">
                                    Automation Scripting
                                </h2>
                                <h1 className="title-font text-m font-medium text-white mb-3">
                                    Scripting to automate tedious tasks such adtaa entry
                                </h1>
                                <p className="leading-relaxed">Placeholder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
   );
}