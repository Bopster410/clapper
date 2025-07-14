import type { FunctionComponent } from 'react';
import { Modal } from './index.component';
import { observer } from 'mobx-react-lite';
import { rootUiStore } from '@/app/store/rootUi';

export const ModalContainerStore: FunctionComponent = observer(() => {
    const store = rootUiStore;
    const content = store.modalContent;
    const isOpened = store.isModalOpened;

    return (
        <Modal
            isOpened={isOpened}
            onClose={content?.modalProps?.onClose}
        >
            {content && <content.Component {...content?.componentProps} />}
        </Modal>
    );
});
