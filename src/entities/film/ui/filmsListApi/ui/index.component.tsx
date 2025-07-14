import { type FunctionComponent } from 'react';
import type { Props } from './index.types';
import { Box } from '@mui/material';
export const FilmsListApi: FunctionComponent<Props> = ({ searchParams }) => {
    return <Box>{JSON.stringify(searchParams)}</Box>;
};
