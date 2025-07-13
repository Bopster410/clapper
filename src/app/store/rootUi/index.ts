/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, type FunctionComponent } from 'react';
import type { IRootUiStore } from './index.types';
import { action, computed, makeObservable, observable } from 'mobx';
import type { ModalContainerProps } from '@/shared/uikit/modal';

class RootUiStore implements IRootUiStore {
    modalContent: {
        Component: FunctionComponent<any>;
        componentProps?: any;
        modalProps?: ModalContainerProps;
    } | null = null;

    constructor() {
        makeObservable(this, {
            openModal: action,
            closeModal: action,
            modalContent: observable,
            isModalOpened: computed,
        });
    }

    openModal = <T extends object>(
        Component: FunctionComponent<T>,
        props?: {
            componentProps?: T;
            modalProps?: ModalContainerProps;
        }
    ) => {
        this.modalContent = { Component, ...props };
    };

    closeModal = () => {
        this.modalContent = null;
    };

    get isModalOpened() {
        return this.modalContent !== null;
    }
}

export const rootUiStore = new RootUiStore();
export const RootUiContext = createContext(rootUiStore);
