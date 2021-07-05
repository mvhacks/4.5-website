import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import PropTypes from 'prop-types';

/**
 * Profile card
 * @prop {String} name - full name
 * @prop {String} title - job title
 * @prop {String} email - mvhacks.io email address: contact@mvhacks.io
 * @prop {imgSrc} imgSrc - image of person
 * @prop {String} website - personal website url
 * @prop {String} insta - instagram username
 * @prop {String} linkedIn - url to LinkedIn page
 */
function OrganizerCard(props) {
    return (
        <div className='organizerCard'>
			{props.imgSrc? 
            	<img src={props.imgSrc} style={{ aspectRatio: "1/1", width: "100%", objectFit: "cover" }} alt='profile' />
			:
			<svg style={{fill: 'black', background: 'var(--gray)'}}xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><circle cx="100" cy="75" r="50"></circle><path d="M25,200c0-66,0-66,75-66s75,0,75,66"></path></svg>
			}
            <div className='organizerNameBox'>
                <h2 className='black bold'>{props.name}</h2>
                <h3 className='gray'>{props.title}</h3>
            </div>
            <div className='organizerOptionsBox'>
                <IconContext.Provider value={{ color: "white", fontSize: "1em" }}>
                    {/* TODO: get links from props and map */}
                    {props.email && <ContactIcon type='email' link={`mailto:${props.email}`}></ContactIcon>}
                    {props.website && <ContactIcon type='website' link={props.website}></ContactIcon>}
                    {props.insta && <ContactIcon type='instagram' link={`https://instagram.com/${props.insta}`}></ContactIcon>}
                    {props.linkedIn && <ContactIcon type='linkedin' link={props.linkedIn}></ContactIcon>}
                </IconContext.Provider>
            </div>
        </div>
    );
}
OrganizerCard.propTypes = {
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	imgSrc: PropTypes.string,
	website: PropTypes.string,
	insta: PropTypes.string,
	linkedIn: PropTypes.string
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
            <a href={props.link} target='_blank' rel='noreferrer noopener' style={{
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
			}}>
				{getIcon()}
            </a>
        </div>
    );
}

export default OrganizerCard;