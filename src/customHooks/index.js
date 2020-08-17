import { useState, useEffect } from 'react';

export function useWindowSize() {  
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
        mobile: undefined
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
                mobile: window.innerWidth <= 768
            });
        }
        
        window.addEventListener("resize", handleResize);
        
        handleResize();
        
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
};