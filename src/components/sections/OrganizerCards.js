import React from 'react'
import OrganizerCard from '../OrganizerCard'
import PageSection from '../PageSection'
export default function organizerCards()
{
	return (<PageSection title={"The Team"}>
					
		<div className='organizerGrid'>
			<OrganizerCard name='Zephyr Jones' title='Tech Team Member' email={'zephyr@mvhacks.io'} website={'zephyrj.com'}></OrganizerCard>
			<OrganizerCard name='Homer Simpson' title='Cartoon'></OrganizerCard>
			<OrganizerCard name='Homer Simpson' title='Cartoon'></OrganizerCard>
			<OrganizerCard name='Homer Simpson' title='Cartoon'></OrganizerCard>
			<OrganizerCard name='Homer Simpson' title='Cartoon'></OrganizerCard>
			<OrganizerCard name='Homer Simpson' title='Cartoon'></OrganizerCard>
			<OrganizerCard name='Homer Simpson' title='Cartoon'></OrganizerCard>
			<OrganizerCard name='Homer Simpson' title='Cartoon'></OrganizerCard>
			<OrganizerCard name='Homer Simpson' title='Cartoon'></OrganizerCard>
			<OrganizerCard name='Homer Simpson' title='Cartoon' email={'homer@mvhacks.io'} imgSrc='http://www.mandysam.com/img/random.jpg'></OrganizerCard>
		</div>
	</PageSection>)
}