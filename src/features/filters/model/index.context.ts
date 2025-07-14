import { createContext, type Dispatch } from 'react';
import type { Action, State } from './index.types';

export function reducer(state: State, action: Action) {
    switch (action.type) {
        case 'SET_GENRES':
            if (
                JSON.stringify(state.genres) === JSON.stringify(action.payload)
            ) {
                return state;
            }

            return { ...state, genres: action.payload };
        case 'SET_RATING':
            if (
                state.rating?.min === action.payload.min &&
                state.rating?.max === action.payload.max
            ) {
                return state;
            }

            return { ...state, rating: action.payload };
        case 'SET_YEAR':
            if (
                state.year?.min === action.payload.min &&
                state.year?.max === action.payload.max
            ) {
                return state;
            }

            return { ...state, year: action.payload };
        default:
            return state;
    }
}

export const FiltersStateContext = createContext<State | undefined>(undefined);
export const FiltersActionsContext = createContext<
    Dispatch<Action> | undefined
>(undefined);
