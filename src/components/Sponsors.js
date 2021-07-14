import * as React from "react";

function Sponsors(props) {
    return (
        <div className='section sponsors'>
            <h1 style={{ marginTop: "1em", marginBottom: "0.2em", fontSize: '2.25em' }}>Coming soon!</h1>
            <br></br>
            <br></br>
            <h2 style={{ marginBottom: "1em", fontSize: '1.5em' }}>
                Interested in sponsoring MVHacks? Contact <a href='mailto:sonav@mvhacks.io'> sonav@mvhacks.io</a> and take a look at our{" "}
                <a href='https://drive.google.com/file/d/1nYNdPKcjtIqK3pEunebXxK-GIHjW02pO/view?usp=sharing' rel='noreferrer' target='_blank'>
                    prospectus
                </a>
                !
            </h2>
        </div>
    );
}

export default Sponsors;
