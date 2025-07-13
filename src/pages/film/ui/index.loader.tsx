import { useLoaderData } from 'react-router';
import type { FilmResponseLong } from '@/entities/film/api/index.types';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { filmData } from '../model/index.context';
import { runInAction } from 'mobx';

export const FilmPageLoader = observer(() => {
    const {
        poster,
        name,
        alternativeName,
        description,
        rating: { kp, imdb, filmCritics, russianFilmCritics },
        releaseYears,
        genres,
        year,
        id,
    } = useLoaderData<FilmResponseLong>();

    const film = filmData;
    useEffect(() => {
        runInAction(() => {
            film.poster = poster?.url;
            film.title = {
                name: name ?? 'Неизвестный фильм',
                altName: alternativeName ?? 'Unknown film',
            };
            film.description = description;
            film.rating = { kp, imdb, filmCritics, russianFilmCritics };
            film.releaseYears = releaseYears;
            film.genres = genres;
            film.year = year;
            film.id = id;
        });
    }, [
        alternativeName,
        description,
        film,
        filmCritics,
        genres,
        id,
        imdb,
        kp,
        name,
        poster?.url,
        releaseYears,
        russianFilmCritics,
        year,
    ]);

    return <div />;
});
