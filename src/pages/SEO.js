import React from 'react';
import { Helmet } from 'react-helmet';
import favicon from '../images/mini-logo.png';

export default ({ title, description, image, secureImage }) => {
    return (
        <Helmet>
            <meta property="og:site_name" content="Gingertonic" />
            <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
            <title>{title ? `${title} | GRWR` : "Gingertonic Reacts with Redux"}</title>
            <meta name="description" content={description || "A Webpack / React / Redux / Jest / Enzyme boilerplate"} />
            <meta name="og:image" content={"http://res.cloudinary.com/gingertonic/image/upload/v1597400558/GTS/logo-512.png"} /> 
            <meta name="og:image:secure_url" content={secureImage || "https://res.cloudinary.com/gingertonic/image/upload/v1597400558/GTS/logo-512.png"} /> 

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:description" content={description || "A Webpack / React / Redux / Jest / Enzyme boilerplate"} />
            <meta property="twitter:title" content={title || "Gingertonic Reacts with Redux"} />
            <meta property="twitter:creator" content="@GingertonicSt" />
            <meta property="twitter:image" content={image || "http://res.cloudinary.com/gingertonic/image/upload/v1597400558/GTS/logo-512.png"} />
            <meta property="twitter:image:alt" content="Gingertonic logo" />
        </Helmet>
    )
}
