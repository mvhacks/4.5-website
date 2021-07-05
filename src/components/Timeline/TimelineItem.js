import React from "react";
function TimelineItem(props) {
	let style = {};
	style[props.left?'left':'right'] = '0%';
	let parentStyle = {top:props.top};
	parentStyle[props.left?'left':'right'] = '10vw';
	return (
		<div className='timeline-item-container center' style={parentStyle}>
			<div className='timeline-item back' style={style}>
			<h2>{props.title}</h2>
			<p className='gray'>{props.displayTime}</p>
		</div>
		<div class='timeline-connector' style=
		{
			props.left?
				{right: '100%', width: '10vw', height:'10px'}
			:
				{left: '100%', width: '10vw',  height: '10px'}
		}></div>
		</div>
	)
}

export default TimelineItem;