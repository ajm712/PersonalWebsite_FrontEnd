import React, { Fragment } from 'react';
import Hamburger from "./Hamburger";
import LargeNavbar from "./LargeNavbar";
import Media from 'react-media';


export default function Navbar() {
    return (
        <header className="bg-gray-800 sm:sticky top-0 z-10">
            <div className="container mx-auto flex relative p-1 flex-col md:flex-row justify-center items-center">
                <Media queries={{
                    small: "(max-width: 599px)",
                    large: "(min-width: 600px)"
                }}>
                    {matches => (
                        <Fragment>
                            {matches.small && <Hamburger />}
                            {matches.large && <LargeNavbar />}
                        </Fragment>
                    )}
                </Media>
            </div>
        </header>
    );
}