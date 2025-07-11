import { Container } from '@mui/material';
import { FilmsWithFilters } from '@/widgets/filmsWithFilters';

export const HomePage = () => {
    return (
        <Container fixed>
            <FilmsWithFilters />
        </Container>
    );
};
