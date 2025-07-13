import { RootUiContext, rootUiStore } from '@/app/store/rootUi';
import { type FunctionComponent, type PropsWithChildren } from 'react';

export const RootUiStoreProvider: FunctionComponent<PropsWithChildren> = ({
    children,
}) => {
    return (
        <RootUiContext.Provider value={rootUiStore}>
            {children}
        </RootUiContext.Provider>
    );
};
