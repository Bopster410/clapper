import { type FunctionComponent } from 'react';
import type { ContainerProps } from './index.types';
import { FilmsWithFilters } from './index.component';
import { observer } from 'mobx-react-lite';
import { AddToFavoritesAssert } from '@/features/favorites';
import { rootUiStore } from '@/app/store/rootUi';
import { favoritesStore } from '@/app/store/favorites';

export const FilmsWithFiltersContainerStore: FunctionComponent<ContainerProps> =
    observer(({ initFilters }) => {
        const store = favoritesStore;
        const uiStore = rootUiStore;

        return (
            <FilmsWithFilters
                initFilters={initFilters}
                onFavoritesClick={(id, filmData) => {
                    const isInFavorites = store.isIdInFavorites(id);

                    if (isInFavorites) store.removeFromFavorites(id);

                    if (!isInFavorites)
                        uiStore.openModal(AddToFavoritesAssert, {
                            componentProps: {
                                onAccept: () => {
                                    store.addToFavorites(id, filmData);
                                    uiStore.closeModal();
                                },
                                onCancel: () => uiStore.closeModal(),
                            },
                            modalProps: {
                                onClose: () => uiStore.closeModal(),
                            },
                        });
                }}
                isInFavorites={(id) => store.isIdInFavorites(id)}
            />
        );
    });
