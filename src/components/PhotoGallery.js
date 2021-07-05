import * as React from 'react';
import photos from '../assets/photo-gallery.json';


function PhotoGallery(props) {

    return (
        <div className='section'>
            <div className='photoGrid'>
			{photos.map((photo, index) => {
				return <img key={index} name={photo.name} src={photo.filepath} className="photo"></img>
			})}
		    </div>
        </div>
    );
}

export default PhotoGallery;