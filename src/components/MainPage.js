import React, { Fragment } from 'react';
import Media from 'react-media';
import LargeLandingPage from "./LargeLandingPage";
import MobileLandingPage from "./MobileLandingPage";

export default function MainPage() {
    return (
        <main>
            <Media queries={{
                small: "(max-width: 599px)",
                large: "(min-width: 600px)"
            }}>
                {matches => (
                    <Fragment>
                        {matches.small && <MobileLandingPage />}
                        {matches.large && <LargeLandingPage />}
                    </Fragment>
                )}
            </Media>
        </main>
    );
}