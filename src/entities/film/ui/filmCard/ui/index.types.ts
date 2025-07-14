import type { ElementType } from 'react';

export interface Props {
    id: number;
    imageSrc?: string;
    title: string;
    year: number;
    rating: number;
    slots?: {
        favoriteBtn?: ElementType;
    };
    slotsProps?: {
        favorteBtn?: object;
    };
}
