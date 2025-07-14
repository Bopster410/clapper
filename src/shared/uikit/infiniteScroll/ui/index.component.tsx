// components/InfiniteScrollObserver.tsx
import { Box } from '@mui/material';
import { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../hooks';
import { throttle } from '@/shared/api';

export const InfiniteScrollObserver = ({
    onIntersect,
    isLoading,
    hasMore,
}: {
    onIntersect: () => void;
    isLoading: boolean;
    hasMore: boolean;
}) => {
    const [ref, inView] = useIntersectionObserver({
        threshold: 0,
        rootMargin: '200px',
    });

    const debouncedOnIntersect = useRef(
        throttle(() => {
            if (!isLoading && hasMore) {
                onIntersect();
            }
        }, 2000)
    );

    useEffect(() => {
        if (inView && debouncedOnIntersect.current) {
            debouncedOnIntersect.current(null);
        }
    }, [inView]);

    return (
        <Box
            ref={ref}
            sx={{ height: '20px', width: '100%' }}
        />
    );
};
