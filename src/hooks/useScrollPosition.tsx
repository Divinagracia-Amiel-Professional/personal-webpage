import { useState, useEffect } from 'react'

function useScrollPosition() {
    const [scrollPosition, setScrollPosition] = useState<number>(window.scrollY);
  
    useEffect(() => {
        const handleScroll = () => {
            // Get the current scroll position
            setScrollPosition(window.scrollY || document.documentElement.scrollTop);
        };
    
        // Add the event listener to track scroll
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return scrollPosition;
}
  
export default useScrollPosition;