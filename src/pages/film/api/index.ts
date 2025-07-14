import { getFilmById } from '@/entities/film/api';
import type { LoaderFunctionArgs } from 'react-router';

export async function loadFilmPageData({ params }: LoaderFunctionArgs) {
    return (await getFilmById(Number.parseInt(params.id ?? '361'))).data;
}
