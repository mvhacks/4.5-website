import * as React from "react";
import OrganizerCards from "../components/sections/OrganizerCards";
import PageSection from "../components/PageSection";

import MVHacksLogo from "../images/MVHacksLogoMV.png";

// markup
const IndexPage = () => {
    return (
        <main>
            <title>Home Page</title>
            <div className='topSection section' style={{minHeight: '80vh'}}>
				<div>
					<img src={MVHacksLogo} style={{ width: "clamp(20px, 80vw, 300px)", height: "auto", display:'' }} alt='MVHacks Logo'></img>
					<h1 style={{ fontSize: "clamp(2em, 10vmin, 6em)", display:'block' }} className='bold black'>
						MVHacks 4.5
					</h1>
					<h1 style={{ fontSize: "clamp(1em, 5vmin, 3em)", margin: '10px'}} className='gray'>
						The hackathon for everyone (especially beginners).
					</h1>
				</div>
				<div className='center'><button className='applyButton'>Apply Now</button></div>
            </div>
            <OrganizerCards></OrganizerCards>
            <PageSection title={"The Team"}></PageSection>
            <PageSection title={"The Team"}></PageSection>
            <PageSection title={"The Team"}></PageSection>
        </main>
    );
};

export default IndexPage;
