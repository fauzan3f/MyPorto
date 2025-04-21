import { useState, useEffect, useRef } from 'react';

export const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
      
      if (options.triggerOnce && entry.isIntersecting) {
        observer.unobserve(element);
      }
    }, options);

    observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options.threshold, options.root, options.rootMargin, options.triggerOnce]);

  return [ref, isInView];
}; 