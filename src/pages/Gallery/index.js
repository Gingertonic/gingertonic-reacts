import React from 'react';
import SEO from '../SEO';

import './style.css';

export default () => {
    const placeholder = "https://cataas.com/cat/gif";

    const images = new Array(36).fill(placeholder);
    const renderImages = images.map((url, i) => <div key={i} className="grid col-2 row-2" ><img className="gallery-image" src={url}/></div>)
    
    return (
        <>
            <SEO title="Gallery"/> 
            { renderImages } 
        </>
    )
}
