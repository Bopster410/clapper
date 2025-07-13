import type { FilmCardProps, Rating } from '@/entities/film';

export interface Props {
    id: number;
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
    isInFavorites?: boolean;
    onFavoritesClick?: (id: number, filmData: FilmCardProps) => void;
}
