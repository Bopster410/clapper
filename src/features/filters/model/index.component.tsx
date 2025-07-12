import {
    type FunctionComponent,
    type PropsWithChildren,
    useReducer,
} from 'react';
import {
    FiltersStateContext,
    FiltersActionsContext,
    reducer,
} from './index.context';
import { INIT_VALUE } from './index.constants';
import type { Props } from './index.types';

export const FiltersProvider: FunctionComponent<PropsWithChildren<Props>> = ({
    initValues,
    children,
}) => {
    const [filtersState, dispatch] = useReducer(
        reducer,
        initValues ?? INIT_VALUE
    );

    return (
        <FiltersStateContext.Provider value={filtersState}>
            <FiltersActionsContext.Provider value={dispatch}>
                {children}
            </FiltersActionsContext.Provider>
        </FiltersStateContext.Provider>
    );
};
