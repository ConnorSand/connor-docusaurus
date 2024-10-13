// src/components/LazyFAIcon.tsx
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface LazyFAIconProps {
  icon: string | object;
  [key: string]: any; // Allow passing any props to FontAwesomeIcon
}

const LazyFAIcon: React.FC<LazyFAIconProps> = ({ icon, ...props }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isLoaded) {
          import('@fortawesome/free-solid-svg-icons').then(() => {
            setIsLoaded(true);
          });
        }
      });
    }, { threshold: 0 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <span ref={ref} style={{ display: 'inline-block' }}>
      <Suspense fallback={<span style={{ visibility: 'hidden' }}>Loading...</span>}>
        {isLoaded && <FontAwesomeIcon icon={icon} {...props} />}
      </Suspense>
    </span>
  );
};

export default LazyFAIcon;
