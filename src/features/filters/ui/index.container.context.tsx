import type { FunctionComponent } from 'react';
import type { ContainerProps } from './index.types';
import { FiltersCard } from './index.component';
import { useFilters } from '../model';

export const FiltersCardContainer: FunctionComponent<ContainerProps> = ({
    yearRange,
    ratingRange,
}) => {
    const [{ year, rating, genres }, { setYear, setRating, setGenre }] =
        useFilters();

    return (
        <FiltersCard
            genres={genres}
            rating={rating}
            year={year}
            onYearFilterChange={(newYears) => setYear(newYears)}
            onRatingFilterChange={(newRating) => setRating(newRating)}
            onGenresFilterChange={(newGenres) => setGenre(newGenres ?? [])}
            yearRange={yearRange}
            ratingRange={ratingRange}
        />
    );
};
