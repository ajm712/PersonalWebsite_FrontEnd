import React, { Fragment } from 'react';
import Hamburger from "./Hamburger";
import Media from 'react-media';
import LargeNavbar2 from './LargeNavbar2';


export default function Navbar() {
    return (
        <header className="bg-gray-800 sticky top-0 z-10">
            <div className="container mx-auto flex p-1 flex-col md:flex-row items-center">
                <Media queries={{
                    small: "(max-width: 599px)",
                    large: "(min-width: 600px)"
                }}>
                    {matches => (
                        <Fragment>
                            {matches.small && <Hamburger />}
                            {matches.large && <LargeNavbar2 />}
                        </Fragment>
                    )}
                </Media>
            </div>
        </header>
    );
}