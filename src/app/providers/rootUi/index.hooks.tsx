import { RootUiContext } from '@/app/store/rootUi';
import { useContext } from 'react';

export function useRootUiStore() {
    const store = useContext(RootUiContext);
    return store;
}
