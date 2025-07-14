import {
    type FunctionComponent,
    type PropsWithChildren,
    useMemo,
    useReducer,
} from 'react';
import {
    FiltersStateContext,
    FiltersActionsContext,
    reducer,
} from './index.context';
import { INIT_VALUE } from './index.constants';
import type { Props } from './index.types';
import { DEFAULT_MAX_YEAR, DEFAULT_MIN_YEAR } from '../ui/index.constants';

export const FiltersProvider: FunctionComponent<PropsWithChildren<Props>> = ({
    initValues,
    children,
}) => {
    const [filtersState, dispatch] = useReducer(
        reducer,
        initValues ?? INIT_VALUE
    );

    const stateValue = useMemo(
        () => ({
            genres: filtersState.genres,
            rating: filtersState.rating,
            year: {
                min: filtersState.year?.min ?? DEFAULT_MIN_YEAR,
                max: filtersState.year?.max ?? DEFAULT_MAX_YEAR,
            },
        }),
        [
            filtersState.genres,
            filtersState.rating,
            filtersState.year?.min,
            filtersState.year?.max,
        ]
    );

    const actionsValue = useMemo(() => dispatch, []);

    return (
        <FiltersStateContext.Provider value={stateValue}>
            <FiltersActionsContext.Provider value={actionsValue}>
                {children}
            </FiltersActionsContext.Provider>
        </FiltersStateContext.Provider>
    );
};
