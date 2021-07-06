import React from 'react'
import OrganizerCard from './OrganizerCard'
import people from './People.json';
export default function organizerCards()
{
	return (
					
		<div className='organizerGrid'>
			{people.map((person, index) => {
				return <OrganizerCard key={index} name={person.name} title={person.title} email={person.email} imgSrc={person.imgSrc} website={person.website} insta={person.insta} linkedInUrl={person.linkedInUrl}></OrganizerCard>
			})}
		</div>
	)
}