import { createContext, type Dispatch } from 'react';
import type { Action, State } from './index.types';

export function reducer(state: State, action: Action) {
    switch (action.type) {
        case 'SET_GENRES':
            return { ...state, genres: action.payload };
        case 'SET_RATING':
            return { ...state, rating: action.payload };
        case 'SET_YEAR':
            return { ...state, year: action.payload };
        default:
            return state;
    }
}

export const FiltersStateContext = createContext<State | undefined>(undefined);
export const FiltersActionsContext = createContext<
    Dispatch<Action> | undefined
>(undefined);
