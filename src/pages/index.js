import * as React from "react";
import OrganizerCards from "../components/TheTeam/OrganizerCards";
import PageSection from "../components/PageSection";
import PhotoGallery from "../components/PhotoGallery";
import Sponsors from "../components/Sponsors";
import Favicon from "react-favicon";
import Faqs from "../components/faq";
import "../styles/navbar.css";
import navbar from "./navbar.js";
import MVHacksLogo from "../images/MVHacksLogoMV.png";
import Timeline from "../components/Timeline/Timeline";
import faviconImg from "../images/SquareMVHacksLogo.png";

// markup
const IndexPage = () => {
    // run navbar() after this element is rendered
    React.useEffect(() => {
        navbar();
    }, []);
    return (
        <>
            <svg xmlns='//www.w3.org/2000/svg' version='1.1' className='svg-filters' style={{ display: "none" }}>
                <defs>
                    <filter id='marker-shape'>
                        <feTurbulence type='fractalNoise' baseFrequency='0.001 0.06' numOctaves='1' result='turbulence' />
                        <feDisplacementMap xChannelSelector='R' yChannelSelector='G' scale='30' in='SourceGraphic' in2='warp' />
                    </filter>
                </defs>
            </svg>
            <main>
                <Favicon url={faviconImg} />
                <title>MVHacks 4.5</title>
                <nav>
                    <button id='pancake'>|||</button>
                    <a href='#MVHacks'>Photo Gallery</a>
                    <a href='#Schedule'>Schedule</a>
                    <a href='#Sponsors'>Sponsors</a>
                    <a href='#FAQs'>FAQs</a>
                    <a href='#The-Team'>The Team</a>
                </nav>
                <div className='topSection section' style={{ minHeight: "80vh" }}>
                    <div className='l-header'>
                        <img src={MVHacksLogo} style={{ width: "clamp(20px, 80vw, 500px)", height: "auto", display: "" }} alt='MVHacks Logo'></img>
                        <h1 style={{ fontSize: "clamp(4em, 10vw, 6em)", display: "block" }} className='bold black'>
                            MVHacks 4.5
                        </h1>
                    </div>
                    <div className='r-header'>
                        <h1
                            style={{ fontSize: "clamp(2em, 3vw, 10em)", margin: "10px", marginBottom: "clamp(8px, 10vh, 80px)", lineHeight: "1.5em" }}
                            className='darkGray'>
                            The hackathon for <span className='highlight black'>everyone.</span>
                            <br /> (especially beginners)
                        </h1>
                        <form className='applyButtonForm' method='get' action='https://forms.gle/Em7kp6rXnLoaD4Eo9' target='_blank'>
                            <button className='applyButton' type='submit'>
                                Apply Now
                            </button>
                        </form>
                    </div>
                </div>
                <PageSection title={"MVHacks"}>
                    <PhotoGallery />
                </PageSection>
                <PageSection title={"Schedule"}>
                    <h3 style={{ marginTop: "1em", paddingLeft: "2em" }}>*The schedule is subject to change</h3>
                    <Timeline distort={0.5}></Timeline>
                </PageSection>
                <PageSection title={"Sponsors"}>
                    <Sponsors></Sponsors>
                </PageSection>
                <PageSection title={"FAQs"}>
                    <Faqs />
                </PageSection>
                <PageSection title={"The Team"}>
                    <OrganizerCards></OrganizerCards>
                </PageSection>
            </main>
            <footer className='center'>
                <div className='center-col'>
                    <form className='applyButtonForm center-col' method='get' action='https://forms.gle/Em7kp6rXnLoaD4Eo9' target='_blank'>
                        <button className='applyButton inverse' type='submit'>
                            Apply Now
                        </button>
                        <p className='white' style={{ paddingTop: "10px" }}>
                            You will get in *
                        </p>
                    </form>
                </div>
                <p className='tiny' style={{ justifySelf: "flex-end" }}>
                    * Based on space available.
                </p>
            </footer>
        </>
    );
};

export default IndexPage;
