import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// This component handles scrolling to anchor links (hash links) when navigating
// ScrollRestoration in React Router doesn't handle this well natively
const ScrollToHashElement = () => {
  const location = useLocation();
  const lastHash = useRef('');

  // When the hash changes, scroll to the element
  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1); // Remove the # character
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        const element = document.getElementById(lastHash.current);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (!location.hash) {
      // When navigating to a new page without hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};

export default ScrollToHashElement; 