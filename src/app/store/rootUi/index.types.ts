/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ModalContainerProps } from '@/shared/uikit/modal';
import type { FunctionComponent } from 'react';

export interface IRootUiStore {
    modalContent: {
        Component: FunctionComponent<any>;
        componentProps?: any;
        modalProps?: ModalContainerProps;
    } | null;

    openModal: <T extends object>(
        modalContent: FunctionComponent<T>,
        props?: {
            componentProps?: T;
            modalProps?: ModalContainerProps;
        }
    ) => void;
    closeModal: () => void;
}
