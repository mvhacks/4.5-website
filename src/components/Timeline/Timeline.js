import React from "react";
import timeline from './timeline.json'
function Timeline()
{
	const events = []
	timeline.forEach(event => {
		events.push({time: Date.parse('1/1/1970 '+event.time), title:event.title})
	});
	console.log(events);
	return (
		<div class='timeline'>
			{events.map(e=>{
				return <p>{e.time}</p>;
			})}
		</div>
	)
}
export default Timeline;