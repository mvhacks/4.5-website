import * as React from "react";
import balsamiq from "../images/balsamiq.png";
import echoAR from "../images/echoar.png";
import redrock from "../images/redrock.png";

function Sponsors(props) {
    return (
        <div className='section sponsors'>
            <div>
                <a href="https://balsamiq.com/" target="_blank"><img class="sponsor-img" src={balsamiq}></img></a>
                <a href="https://www.echo3d.co/" target="_blank"><img class="sponsor-img" src={echoAR}></img></a>
                <a href="https://redrockcoffee.com/" target="_blank"><img class="sponsor-img" src={redrock}></img></a>
            </div>
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
