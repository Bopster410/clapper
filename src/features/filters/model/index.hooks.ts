import { useCallback, useContext } from 'react';
import { FiltersActionsContext, FiltersStateContext } from './index.context';
import type { Genre } from '../../../entities/film';
import type { NumbersRange } from '../../../shared/types';

export function useFiltersState() {
    const filters = useContext(FiltersStateContext);
    if (filters === undefined)
        throw Error('Component needs to be wrapped in context provider!');
    return filters;
}

export function useFiltersActions() {
    const dispatch = useContext(FiltersActionsContext);

    const setGenre = useCallback(
        (genres: Genre[]) =>
            dispatch
                ? dispatch({ type: 'SET_GENRES', payload: genres })
                : () => {},
        [dispatch]
    );

    const setYear = useCallback(
        (yearsRange: NumbersRange) =>
            dispatch
                ? dispatch({ type: 'SET_YEAR', payload: yearsRange })
                : () => {},
        [dispatch]
    );

    const setRating = useCallback(
        (ratingRange: NumbersRange) =>
            dispatch
                ? dispatch({ type: 'SET_RATING', payload: ratingRange })
                : () => {},
        [dispatch]
    );

    if (dispatch === undefined)
        throw Error('Component needs to be wrapped in context provider!');

    return { setGenre, setYear, setRating };
}

export function useFilters() {
    return [useFiltersState(), useFiltersActions()] as const;
}
