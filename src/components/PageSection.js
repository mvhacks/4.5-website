import React, {useRef} from "react";

function PageSection(props) {
    const collapsing = useRef();
    // on window resize set the max height of the element
    window.addEventListener('resize', () => {
        if (collapsing.current) {
            collapsing.current.style.maxHeight = collapsing.current.scrollHeight + 'px';
        }
    });

    React.useEffect(() => {
        collapsing.current.style.maxHeight = collapsing.current.scrollHeight + "px";
    }, []);
    return (
        <div className='section' id={props.title.replace(' ', '-')}>
            <button className='sectionTitleBar' onClick={(e)=>{
				if (e.currentTarget.parentNode.classList.toggle('hidden')) {
                    collapsing.current.style.maxHeight = "0px";
                }
                else {
                    collapsing.current.style.maxHeight = collapsing.current.scrollHeight + "px";
                }
            }}>
                <h1 className='white bold'>{props.title}</h1>
				<h2 className='collapse white bold'>{'▼'}</h2>
            </button>
			<div ref={collapsing} className='children'>
            	{props.children}
			</div>
        </div>
    );
}

export default PageSection;
