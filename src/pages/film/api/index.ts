import { getFilmById } from '@/entities/film/api';
import type { LoaderFunctionArgs } from 'react-router';

export async function loadFilmPageData({ params }: LoaderFunctionArgs) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return getFilmById(Number.parseInt(params.id ?? '361'));
}
