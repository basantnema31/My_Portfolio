import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal — fires once when the element enters the viewport.
 * Respects the global `skip-animations` class set during deep-link jumps
 * so those sections appear instantly rather than fading in mid-jump.
 */
export function useScrollReveal(options = {}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // If we're in a deep-link jump, skip the animation entirely
        if (document.body.classList.contains('skip-animations')) {
            setIsVisible(true);
            return;
        }

        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(element); // fire once only
                }
            },
            {
                threshold: options.threshold ?? 0.08,
                rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
            }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [options.threshold, options.rootMargin]);

    return { ref, isVisible };
}
