import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export function useScrollAnimation(ref, options = {}) {  
    const controls = useAnimation();
 

  useEffect(() => {
    const { threshold = 0.1, triggerOnce = false } = options;

    const handleScroll = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0 });
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else {
          controls.start({ opacity: 0, y: -50});
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold, // Controls when the intersection callback should be triggered.
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, controls, options]);

  return controls;
}
