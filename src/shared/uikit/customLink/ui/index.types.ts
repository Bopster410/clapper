import type { LinkProps } from 'react-router';

export interface Props extends Omit<LinkProps, 'to'> {
    href: string;
}
