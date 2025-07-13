import { RootContext, rootStore } from '@/app/store/root';
import { type FunctionComponent, type PropsWithChildren } from 'react';

export const RootStoreProvider: FunctionComponent<PropsWithChildren> = ({
    children,
}) => {
    return (
        <RootContext.Provider value={rootStore}>
            {children}
        </RootContext.Provider>
    );
};
