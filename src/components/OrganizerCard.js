import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function OrganizerCard(props) {
    return (
        <div className='organizerCard'>
            <img src='http://www.mandysam.com/img/random.jpg' style={{ aspectRatio: "1/1", width: "100%", objectFit: "cover" }} />
            <div className='organizerNameBox'>
                <h2 className='black bold'>{props.name}</h2>
                <h3 className='gray'>{props.title}</h3>
            </div>
            <div className='organizerOptionsBox'>
                <IconContext.Provider value={{ color: "white", fontSize: "1em" }}>
                    {/* TODO: get links from props and map */}
                    <ContactIcon type='email'></ContactIcon>
                    <ContactIcon type='website'></ContactIcon>
                    <ContactIcon type='instagram'></ContactIcon>
                    <ContactIcon type='linkedin'></ContactIcon>
                </IconContext.Provider>
            </div>
        </div>
    );
}

function ContactIcon(props) {
    function getIcon() {
        if (props.type === "email") return <FaEnvelope></FaEnvelope>;
        if (props.type === "website") return <FaGlobe></FaGlobe>;
        if (props.type === "instagram") return <FaInstagram></FaInstagram>;
        if (props.type === "linkedin") return <FaLinkedinIn></FaLinkedinIn>;
        return <FaEnvelope></FaEnvelope>;
    }
    return (
        <div className='organizerOption'>
            <a href={props.link}>
                <div
                    style={{
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "2.5em",
                        aspectRatio: "1/1",
                        backgroundColor: "var(--primary)",
                        borderRadius: "2em",
                        margin: 0,
                    }}>
                    {getIcon()}
                </div>
            </a>
        </div>
    );
}

export default OrganizerCard;
