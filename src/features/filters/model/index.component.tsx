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

export const FiltersProvider: FunctionComponent<PropsWithChildren> = ({
    children,
}) => {
    const [filtersState, dispatch] = useReducer(reducer, INIT_VALUE);

    return (
        <FiltersStateContext.Provider value={filtersState}>
            <FiltersActionsContext.Provider value={dispatch}>
                {children}
            </FiltersActionsContext.Provider>
        </FiltersStateContext.Provider>
    );
};
