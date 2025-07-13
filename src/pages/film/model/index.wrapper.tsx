import { observer } from 'mobx-react-lite';
import { FilmPageContainer } from '../ui/index.container';
import { FilmPageLoader } from '../ui/index.loader';
import { FilmPageStore } from '../ui/index.store';
import { Box } from '@mui/material';

export const FilmPageWrapped = observer(() => {
    return (
        <Box>
            <FilmPageLoader />
            <FilmPageStore />
            <FilmPageContainer />
        </Box>
    );
});
