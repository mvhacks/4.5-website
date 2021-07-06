import React from "react";
function TimelineItem(props) {
	let style = {};
	style[props.left?'left':'right'] = '0%';
	let parentStyle = {top:props.top};
	const distOver = 'max(calc(30vw - 200px), 100%)'
	parentStyle[props.left?'left':'right'] = distOver;
	let connectorStyle = {top: '-5px', width: `max(calc(30vw - 200px + 100%), 100%)`, height: '10px'}
	connectorStyle[props.left?'right':'left'] = '0'
	return (
		<div className='timeline-item-container' style={parentStyle}>
			<div className='timeline-item back' style={style}>
				<h2>{props.title}</h2>
				{props.desc&&<h3>{props.desc}</h3>}
				<p className='gray'>{props.displayTime}</p>
		</div>
		<div className='timeline-connector' style={connectorStyle}></div>
		</div>
	)
}

export default TimelineItem;