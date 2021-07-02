import React from "react";

function PageSection(props) {
    return (
        <div className='section'>
            <div className='sectionTitleBar'>
                <h1 className='white bold'>{props.title}</h1>
            </div>
            {props.children}
        </div>
    );
}

export default PageSection;
