import * as React from "react";
import OrganizerCards from "../components/TheTeam/OrganizerCards";
import PageSection from "../components/PageSection";
import PhotoGallery from "../components/PhotoGallery";

import MVHacksLogo from "../images/MVHacksLogoMV.png";
import Timeline from "../components/Timeline/Timeline";

// markup
const IndexPage = () => {
    return (
		<>
		<svg xmlns="//www.w3.org/2000/svg" version="1.1" class="svg-filters" style={{display:'none'}}>
		<defs>
			<filter id="marker-shape">
			<feTurbulence type="fractalNoise" baseFrequency="0.001 0.06" numOctaves="1" result="turbulence" />
			<feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warp" />
			</filter>
		</defs>
		</svg>
        <main>
            <title>MVHacks 4.5</title>
            <div className='topSection section' style={{minHeight: '80vh'}}>
				<div className='l-header'>
					<img src={MVHacksLogo} style={{ width: "clamp(20px, 80vw, 500px)", height: "auto", display:'' }} alt='MVHacks Logo'></img>
					<h1 style={{ fontSize: "clamp(4em, 10vw, 6em)", display:'block' }} className='bold black'>
						MVHacks 4.5
					</h1>
				</div>
				<div className='r-header'>
					<h1 style={{ fontSize: "clamp(2em, 3vw, 10em)", margin: '10px', marginBottom:'clamp(10px, 20vh, 100px)'}} className='gray'>
						The hackathon for <span class='highlight'>everyone.</span><br/> (especially beginners)
					</h1>
					<button className='applyButton'>Apply Now</button>
				</div>
            </div>
            <PageSection title={"MVHacks"}> 
				<PhotoGallery />
			</PageSection>
            <PageSection title={"Schedule"}>
				<Timeline></Timeline>
			</PageSection>
            <PageSection title={"Sponsors"}>

			</PageSection>
            <PageSection title={"FAQS"}>
				
			</PageSection>

            <PageSection title={"The Team"}>
				<OrganizerCards></OrganizerCards>
			</PageSection>
        </main>
		<footer className='center'>
			<div className='center-col'>
			<button className='applyButton inverse'>Apply Now</button>
			<p className='white' style={{ paddingTop:'10px'}}>You will get in *</p>
			</div>
			<p className='tiny' style={{justifySelf: "flex-end"}}>* Based on space available.</p>
		</footer>
		</>
    );
};

export default IndexPage;
