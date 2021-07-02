import * as React from "react";
import OrganizerCard from "../components/OrganizerCard";
import PageSection from "../components/PageSection";

import MVHacksLogo from "../images/MVHacksLogoMV.png";

// markup
const IndexPage = () => {
    return (
        <main>
            <title>Home Page</title>
            <div className='topSection section' style={{ height: "100vh" }}>
                <img src={MVHacksLogo} style={{ width: "20em", height: "auto" }}></img>
                <h1 style={{ fontSize: "6em" }} className='bold black'>
                    MVHacks 4.5
                </h1>
                <h1 style={{ fontSize: "3em" }} className='gray'>
                    The hackathon for everyone (especially beginners).
                </h1>
                <button className='applyButton'>Apply Now 👉</button>
            </div>
            <PageSection title={"The Team"}>
                <div className='organizerGrid'>
                    <OrganizerCard name='Homer Simpson' title='Cartoon'></OrganizerCard>
                    <OrganizerCard name='Homer Simpson' title='Cartoon'></OrganizerCard>
                    <OrganizerCard name='Homer Simpson' title='Cartoon'></OrganizerCard>
                    <OrganizerCard name='Homer Simpson' title='Cartoon'></OrganizerCard>
                    <OrganizerCard name='Homer Simpson' title='Cartoon'></OrganizerCard>
                    <OrganizerCard name='Homer Simpson' title='Cartoon'></OrganizerCard>
                    <OrganizerCard name='Homer Simpson' title='Cartoon'></OrganizerCard>
                    <OrganizerCard name='Homer Simpson' title='Cartoon'></OrganizerCard>
                    <OrganizerCard name='Homer Simpson' title='Cartoon'></OrganizerCard>
                    <OrganizerCard name='Homer Simpson' title='Cartoon'></OrganizerCard>
                </div>
            </PageSection>
            <PageSection title={"The Team"}></PageSection>
            <PageSection title={"The Team"}></PageSection>
            <PageSection title={"The Team"}></PageSection>
        </main>
    );
};

export default IndexPage;
