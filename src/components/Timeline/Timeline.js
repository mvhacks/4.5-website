import React, {useRef} from "react";
import timeline from './timeline.json'
import './timeline.css'
import TimelineItem from "./TimelineItem";
function Timeline(props)
{
	const timelineCenter = useRef();
	const events = []
	timeline.forEach(event => {
		// console.log(event)

		const out = {...event}
		out.displayTime = event.time;
		out.time = Date.parse('1/1/1970 '+event.time)
		events.push(out)
	});
	events.sort((a, b) =>a.time-b.time);
	function getMinDiffBetweenEvents()
	{
		let minDist = Number( events[2].time - events[0].time);
		for (var i = 3; i<events.length; i++)
		{
			const diff = Number(events[i].time - events[i-2].time);
			if (minDist>diff)
			{
				minDist = diff;
			}
		}
		return minDist;
	}
	const itemHeight = 250;
	const minDiff = getMinDiffBetweenEvents();
	let runningHeight = itemHeight/4;
	let runningTime = events[0].time;
	const timeToTop = (time) =>{
		runningHeight += itemHeight/2*Math.pow((time-runningTime)/minDiff, props.distort??1)
		// console.log(runningHeight)
		runningTime = time;
		return runningHeight;
	}
	events.forEach((e, i)=>{
		let props = e;
		props.top = timeToTop(e.time) + 'px'
		props.left = !!(i%2)
		e.props = props;
	})
	runningHeight+=itemHeight*.75;
	return (
		<div className='timeline'>
			<div ref={timelineCenter} className='timeline-center' style={{height: runningHeight}}>
				{events.map((e, i)=>{
					// return <TimelineItem key={i} title={e.title} displayTime={e.displayTime} top={timeToTop(e.time)-itemHeight/2+itemHeight/2} left={!!(i%2)}></TimelineItem>
					return <TimelineItem key={i} {...e.props}></TimelineItem>
				})}
			</div>
		</div>
	)
}
export default Timeline;