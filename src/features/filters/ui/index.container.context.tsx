import type { FunctionComponent } from 'react';
import type { ContainerProps } from './index.types';
import { FiltersCard } from './index.component';
import { useFilters } from '../model';

export const FiltersCardContainer: FunctionComponent<ContainerProps> = () => {
    const [{ year, rating, genres }, { setYear, setRating, setGenre }] =
        useFilters();

    return (
        <FiltersCard
            genres={genres}
            rating={rating ?? { min: 4, max: 5 }}
            year={year ?? { min: 1990, max: 2025 }}
            onYearFilterChange={(newYears) => setYear(newYears)}
            onRatingFilterChange={(newRating) => setRating(newRating)}
            onGenresFilterChange={(newGenres) => setGenre(newGenres ?? [])}
        />
    );
};
