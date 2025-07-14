import type { Genre } from '@/entities/film';
import type { NumbersRange } from '@/shared/types';

export interface Props {
    genres: Genre[];
    rating: NumbersRange | null;
    year: NumbersRange | null;
    onRatingFilterChange?: (newRating: NumbersRange) => void;
    onYearFilterChange?: (newYears: NumbersRange) => void;
    onGenresFilterChange?: (newGenres: Genre[] | null) => void;
    yearRange?: { min: number; max: number };
    ratingRange?: { min: number; max: number };
}

export interface ContainerProps {
    yearRange?: { min: number; max: number };
    ratingRange?: { min: number; max: number };
}
