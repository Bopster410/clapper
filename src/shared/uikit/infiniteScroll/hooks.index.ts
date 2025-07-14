import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(
    options?: IntersectionObserverInit
): [React.RefObject<HTMLDivElement | null>, boolean] {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        const current = ref.current;

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, [options]);

    return [ref, isIntersecting];
}
