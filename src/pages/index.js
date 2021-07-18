import * as React from "react";
import OrganizerCards from "../components/TheTeam/OrganizerCards";
import PageSection from "../components/PageSection";
import PhotoGallery from "../components/PhotoGallery";
import Sponsors from "../components/Sponsors";
import Favicon from "react-favicon";
import Faqs from "../components/faq";
import "../styles/navbar.css";
import MVHacksLogo from "../images/MVHacksLogoMV.png";
import Timeline from "../components/Timeline/Timeline";
import faviconImg from "../images/SquareMVHacksLogo.png";


function navbar() {
    let timeoutCode = null;
    const nav = document.querySelector("nav");
    if (document.referrer.includes(window.location.hostname)) // checks to see if past page was same URL or not. If it was then it displays animation.
    {
        const container = nav;
        container.style.setProperty("transition", "none", "important");
        container.classList.add("expanded");

        container.querySelectorAll("a").forEach(e=>{
            const s = e.style;
            s.setProperty("color", "rgba(0, 0, 0, 0)");
            s.setProperty("border", "none");
        })
        window.setTimeout(e=>{
            container.style.setProperty("transition", "");
            container.classList.toggle("expanded");
                container.querySelectorAll("a").forEach(e=>{
            const s = e.style;
            s.setProperty("color", "");
            s.setProperty("border", "");
        }, 500)
        })
    }
    function setHeightOfContainer(expanded)
    {
        expanded = expanded ?? nav.classList.contains("expanded"); // ?? means if first value is null then use the value after the ??. Basically if expanded is null, set expanded to the second term
        if (!expanded)
        {
            nav.style.maxHeight = 70+"px"; // 70 because the button height is 50px and there is 10px of padding for both the top and the bottom.
        }
        else
        {
            nav.style.maxHeight = window.innerHeight-20+"px"; // window.innerHeight to get the max height visable (specificially for mobile) - 20 because of top and bottom padding.
        }
    }
    function onChangeInExpanded(linkContainer)
    {
            const expanded = linkContainer.classList.contains("expanded"); // checks if container is showing.
            setHeightOfContainer(true);
            if (timeoutCode)
            {
                window.clearTimeout(timeoutCode) // if the event hasn't happened, cancel the event.
            }
            timeoutCode = window.setTimeout(()=>{
                timeoutCode = null // sets timeoutCode to null to show that the event already happened.
                linkContainer.style.setProperty("overflow", expanded?"auto":"hidden"); // shows scrollbar if needed. Without this the scrollbar would appear during the expanding animation
            }, expanded?500:0) // 500ms = .5s or the animation time. The code inside of the brackets will run after the animation is finished.
            window.setTimeout(()=>
            {
                linkContainer.childNodes[0].textContent = expanded?"✕":"|||";
            }, 250);
            window.addEventListener("resize", e=>
            {
                setHeightOfContainer(true);
            })
    }
    setHeightOfContainer(true);
    document.getElementById("pancake").addEventListener('click', e=> // when the pancake button is clicked
    {
        e.target.parentElement.classList.toggle("expanded"); // toggle the class "expanded" on the parent of the target (the target is the pancake button) so it toggles the class expanded on the container.
        onChangeInExpanded(e.target.parentElement);
    })

    document.addEventListener('focus', function() { // if user tabs over link then the menu opens, if they tab out it closes
        if (document.activeElement.nodeName !== "BUTTON" && document.activeElement.parentElement.nodeName === "NAV")
        {
            document.activeElement.parentElement.classList.add("expanded");
            onChangeInExpanded(document.activeElement.parentElement);
        }
        else
        {
            const container = nav;
            container.classList.remove("expanded");
            onChangeInExpanded(container);
        }
    }, true);
    nav.querySelectorAll("a").forEach(e=>{
        e.addEventListener("click", e=>{
            const container = nav;
            container.classList.remove("expanded");
            onChangeInExpanded(container);
        })
    })
}

// markup
const IndexPage = () => {
    // run navbar() after this element is rendered
    React.useEffect(() => {
        if (typeof document !== 'undefined')
        {
            navbar();
        }
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
