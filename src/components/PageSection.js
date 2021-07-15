import React, {useRef} from "react";

function PageSection(props) {
    const collapsing = useRef();
    const parent = useRef();

    // change the height of the page section when class or style changes
    React.useEffect(() => {

        const mutationObserver = new MutationObserver(function(mutationsList) {
            // guess the height change due to the class change and then set the height after the transition completes
            if (collapsing.current.style.maxHeight !== '0px') {
                collapsing.current.style.maxHeight = parseFloat(collapsing.current.style.maxHeight) + mutationsList[0].target.scrollHeight*3 + 'px'; // im being kinda lazy here - I should store all stored changes in scrollheights and use that for the maxHeight and then set the max height on transition end
                mutationsList[0].target.addEventListener('transitionend', function() {
                    mutationsList[0].target.style.maxHeight = collapsing.current.scrollHeight;
                })
            }
        })
        if (!parent.current.classList.contains('hidden')) {
            collapsing.current.style.maxHeight = collapsing.current.scrollHeight + 'px';
        }
        mutationObserver.observe(collapsing.current, {
            attributes: true,
            attributeFilter: ['class', 'className'],
            subtree: true,
            childList: true
        });

        // on window resize set the max height of the element
        window.addEventListener('resize', () => {
            if (!parent.current.classList.contains('hidden')) {
                collapsing.current.style.maxHeight = collapsing.current.scrollHeight + 'px';
            }
        });
        return () => {
            mutationObserver.disconnect();
        }
    }, []);

    return (
        <div ref={parent} className='section' id={props.title.replace(' ', '-')}>
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
