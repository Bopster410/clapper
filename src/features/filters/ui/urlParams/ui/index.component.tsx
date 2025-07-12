import { useFiltersState } from '@/features/filters/model';
import { useEffect, type FunctionComponent } from 'react';
import { useSearchParams } from 'react-router';
import type { Props, SearchParams } from './index.types';

export const UrlFilterParamsSetter: FunctionComponent<Props> = ({
    defaultRating,
    defaultYears,
}) => {
    const { year, genres, rating } = useFiltersState();
    const [, setSearchParams] = useSearchParams();
    useEffect(() => {
        setSearchParams({
            yearmin: `${year?.min ?? defaultYears.min}`,
            yearmax: `${year?.max ?? defaultYears.max}`,
            ratingmin: `${rating?.min ?? defaultRating.min}`,
            ratingmax: `${rating?.max ?? defaultRating.max}`,
            genres: JSON.stringify(genres),
        } as SearchParams);
    }, [
        defaultRating.max,
        defaultRating.min,
        defaultYears.max,
        defaultYears.min,
        genres,
        rating?.max,
        rating?.min,
        setSearchParams,
        year?.max,
        year?.min,
    ]);

    return <div />;
};
