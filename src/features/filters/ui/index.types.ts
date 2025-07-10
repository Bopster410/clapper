import type { Genre } from '../../../entities/film';
import type { NumbersRange } from '../../../shared/types';

export interface Props {
    genres: Genre[];
    rating: NumbersRange;
    year: NumbersRange;
    onRatingFilterChange?: (newRating: NumbersRange) => void;
    onYearFilterChange?: (newYears: NumbersRange) => void;
    onGenresFilterChange?: (newGenres: Genre[] | null) => void;
}

export interface ContainerProps {
    initialFilters?: {
        genres?: string[];
        rating?: NumbersRange;
        year?: NumbersRange;
    };
}
