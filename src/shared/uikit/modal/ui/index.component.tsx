import {
    useEffect,
    useRef,
    type FunctionComponent,
    type PropsWithChildren,
} from 'react';
import type { Props } from './index.types';
import styles from './Modal.module.css';
import { useHandleClickOutside } from '@/shared/utils/handleClickOutside';

export const Modal: FunctionComponent<PropsWithChildren<Props>> = ({
    isOpened,
    children,
    onClose,
}) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const [addClickOutsideListener, removeClickOutsideListener] =
        useHandleClickOutside(dialogRef.current, onClose);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) {
            document.body.classList.remove('overflow-hidden');
            return;
        }

        if (isOpened) {
            document.body.classList.add('overflow-hidden');
            addClickOutsideListener();
            dialog.showModal();
        } else {
            document.body.classList.remove('overflow-hidden');
            dialog.close();
        }

        return () => removeClickOutsideListener();
    }, [addClickOutsideListener, isOpened, removeClickOutsideListener]);

    return (
        <dialog
            className={styles.modal}
            ref={dialogRef}
            onClose={onClose}
        >
            {children}
        </dialog>
    );
};
