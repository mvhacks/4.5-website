import React, {useRef} from "react";
import timeline from './timeline.json'
import './timeline.css'
import TimelineItem from "./TimelineItem";
function Timeline()
{
	const timelineCenter = useRef();
	const events = []
	timeline.forEach(event => {
		events.push({time: Date.parse('1/1/1970 '+event.time), displayTime:event.time, title:event.title})
	});
	events.sort((a, b) =>a.time-b.time);
	function getMinDiffBetweenEvents()
	{
		let minDist = Number( events[1].time - events[0].time);
		for (var i = 2; i<events.length; i++)
		{
			const diff = Number(events[i].time - events[i-1].time);
			if (minDist>diff)
			{
				minDist = diff;
			}
		}
		return minDist;
	}
	const timeLength = events[events.length-1].time - events[0].time;
	const itemHeight = 150;
	const minDiff = getMinDiffBetweenEvents()*2;
	const lineHeight = (timeLength/minDiff) * itemHeight;
	const timeToTop = (time) =>{
		console.log(time-events[0].time)
		return (time - events[0].time) * (lineHeight/timeLength);
	}
	return (
		<div className='timeline'>
			<div ref={timelineCenter} className='timeline-center' style={{height: lineHeight+itemHeight}}>
				{events.map((e, i)=>{
					return <TimelineItem title={e.title} displayTime={e.displayTime} top={timeToTop(e.time)-itemHeight/2+itemHeight/2} left={!!(i%2)}></TimelineItem>
				})}
			</div>
		</div>
	)
}
export default Timeline;