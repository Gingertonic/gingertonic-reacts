import React from 'react';
import SEO from '../SEO';

import './style.css';

export default () => {
    const placeholder = "http://lorempixel.com/800/800"
    const images = new Array(6).fill(placeholder);
    const renderImages = images.map((url, i) => <div key={i} className="grid col-4 row-6" ><img className="gallery-image" src={url}/></div>)
    
    return (
        <>
            <SEO title="Gallery"/> 
            { renderImages } 
        </>
    )
}
