import React from "react";

function PageSection(props) {
    return (
        <div className='section' id={props.title.replace(' ', '-')}>
            <button className='sectionTitleBar' onClick={(e)=>{
				e.currentTarget.parentNode.classList.toggle('hidden')
			}}>
                <h1 className='white bold'>{props.title}</h1>
				<h2 className='collapse white bold'>{'▼'}</h2>
            </button>
			<div className='children'>
            	{props.children}
			</div>
        </div>
    );
}

export default PageSection;
