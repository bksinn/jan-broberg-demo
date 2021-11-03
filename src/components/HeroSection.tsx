import React from 'react';
import heroImage from "../assets/images/JanBroberg.webp";

export default function HeroSection() {
    const hello = 100;
    const playVideo = () => {

    };

    return(
        <React.Fragment>
            <div className="hero">
                <p>"I exist to end the silence until every child is safe."</p>
                <img alt="sdf" src={heroImage} />
            </div>
        </React.Fragment>
    );
}