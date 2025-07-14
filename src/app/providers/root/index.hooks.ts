import { RootContext } from '@/app/store/root';
import { useContext } from 'react';

export function useRootStore() {
    const rootStore = useContext(RootContext);
    return rootStore;
}
