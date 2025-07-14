import { useState, type FunctionComponent } from 'react';
import type { ContainerApiProps } from './index.types';
import { getFilmGenres, type Genre } from '@/entities/film';
import { GenresFilter } from './index.component';
export const GenresFilterContainerApi: FunctionComponent<ContainerApiProps> = ({
    value,
    onGenresFilterChange,
}) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<readonly Genre[]>([]);
    const [loading, setLoading] = useState(false);

    const handleOpen = () => {
        setOpen(true);
        if (options.length === 0)
            (async () => {
                setLoading(true);
                const genres = await getFilmGenres();
                setLoading(false);

                setOptions(genres.data);
            })();
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <GenresFilter
            value={value}
            onGenresFilterChange={onGenresFilterChange}
            open={open}
            options={options}
            onOpen={handleOpen}
            onClose={handleClose}
            loading={loading}
        />
    );
};
