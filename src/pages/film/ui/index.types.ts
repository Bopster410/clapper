import type { Rating } from '@/entities/film';

export interface Props {
    poster?: string;
    title: {
        name: string;
        altName: string;
    };
    description: string | null;
    rating: Rating;
    releaseYears?: { start: number; end: number | null }[];
    year?: number;
    genres: { name: string }[];
}
