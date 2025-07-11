import { useLoaderData } from 'react-router';
import { FilmPage } from './index.component';
import type { FilmResponseLong } from '@/entities/film/api/index.types';

export const FilmPageContainerLoader = () => {
    const {
        poster,
        name,
        alternativeName,
        description,
        rating,
        releaseYears,
        genres,
        year,
    } = useLoaderData<FilmResponseLong>();

    return (
        <FilmPage
            poster={poster?.url}
            title={{
                name: name ?? 'Неизвестный фильм',
                altName: alternativeName ?? 'Unknown film',
            }}
            description={description}
            rating={rating}
            releaseYears={releaseYears}
            year={year}
            genres={genres}
        />
    );
};
