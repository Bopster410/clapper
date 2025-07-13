import { useRootStore } from '../root/index.hooks';

export function useFavorites() {
    const { favorites } = useRootStore();
    return favorites;
}
