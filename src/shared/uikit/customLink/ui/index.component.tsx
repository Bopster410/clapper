import { type FunctionComponent } from 'react';
import type { Props } from './index.types';
import { Link } from 'react-router';
export const CustomLink: FunctionComponent<Props> = ({ href, ...props }) => {
    return (
        <Link
            to={href}
            {...props}
        />
    );
};
