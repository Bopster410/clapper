import { useCallback } from 'react';

export function useHandleClickOutside(
    element: HTMLElement | null,
    onClickOutside?: (e?: MouseEvent) => void
) {
    const handleClickOutside = useCallback(
        (event: MouseEvent) => {
            if (element === null) return;

            const rect = element.getBoundingClientRect();
            const isOutside =
                event.clientX < rect.left ||
                event.clientX > rect.right ||
                event.clientY < rect.top ||
                event.clientY > rect.bottom;

            if (isOutside) {
                if (onClickOutside) onClickOutside();
            }
        },
        [element, onClickOutside]
    );

    const addListener = useCallback(() => {
        document.addEventListener('mousedown', handleClickOutside);
    }, [handleClickOutside]);

    const removeListener = useCallback(() => {
        document.removeEventListener('mousedown', handleClickOutside);
    }, [handleClickOutside]);

    return [addListener, removeListener] as const;
}
