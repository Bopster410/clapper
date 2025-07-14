import { getFilmList, type FilmCardProps } from '@/entities/film';
import { throttle } from '@/shared/api';
import { useCallback, useEffect, useRef, useState } from 'react';

export function useLoadFilms({
    genres,
    limit,
    page,
    ratingmin,
    ratingmax,
    yearmin,
    yearmax,
}: {
    genres: string;
    limit: number;
    page: number;
    ratingmin: number;
    ratingmax: number;
    yearmin: number;
    yearmax: number;
}) {
    const [films, setFilms] = useState<FilmCardProps[]>([]);
    const [currentPage, setCurrentPage] = useState(page ?? 1);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const abortControllerRef = useRef<AbortController>(null);
    const isMountedRef = useRef(false);
    const requestParamsRef = useRef({
        genres,
        limit,
        ratingmin,
        ratingmax,
        yearmin,
        yearmax,
    });

    useEffect(() => {
        requestParamsRef.current = {
            genres,
            limit,
            ratingmin,
            ratingmax,
            yearmin,
            yearmax,
        };
    }, [genres, limit, ratingmin, ratingmax, yearmin, yearmax]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleFiltersChange = useCallback(
        throttle(
            async (args?: { pageToLoad: number; isNewSearch: boolean }) => {
                if (!args) return;

                if (abortControllerRef.current) {
                    abortControllerRef.current.abort();
                }
                const controller = new AbortController();
                abortControllerRef.current = controller;
                setIsLoading(true);

                try {
                    const response = await getFilmList({
                        params: {
                            limit: requestParamsRef.current.limit,
                            page: args.pageToLoad,
                            rating: {
                                min: requestParamsRef.current.ratingmin,
                                max: requestParamsRef.current.ratingmax,
                            },
                            years: {
                                min: requestParamsRef.current.yearmin,
                                max: requestParamsRef.current.yearmax,
                            },
                            genres: JSON.parse(
                                requestParamsRef.current.genres ?? '[]'
                            ),
                        },
                        signal: controller.signal,
                    });

                    if (controller.signal.aborted) return;

                    const newFilms = response.data.docs.map(
                        ({
                            name,
                            alternativeName,
                            id,
                            year,
                            rating,
                            poster,
                        }) => ({
                            id,
                            title:
                                name ?? alternativeName ?? 'неизвестный фильм',
                            year,
                            rating: rating.kp,
                            imageSrc: poster?.previewUrl,
                        })
                    );

                    setFilms((prevFilms) => {
                        if (args.isNewSearch) {
                            // Оптимизированное сравнение фильмов
                            const filmsChanged =
                                prevFilms.length !== newFilms.length ||
                                prevFilms.some(
                                    (f, i) => f.id !== newFilms[i]?.id
                                );
                            return filmsChanged ? newFilms : prevFilms;
                        }
                        return [...prevFilms, ...newFilms];
                    });

                    setHasMore(response.data.page < response.data.pages);
                } catch (err) {
                    console.error(err);
                    setHasMore(false);
                } finally {
                    setIsLoading(false);
                }
            },
            3000,
            { leading: true, trailing: false }
        ),
        []
    );

    useEffect(() => {
        if (isMountedRef.current) {
            setCurrentPage(1);
            setFilms([]);
            handleFiltersChange({
                pageToLoad: 1,
                isNewSearch: true,
            });
        } else {
            isMountedRef.current = true;
        }

        return () => {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };
        // console.log('rerendered');
    }, [
        genres,
        handleFiltersChange,
        limit,
        page,
        ratingmax,
        ratingmin,
        yearmax,
        yearmin,
    ]);

    const loadMore = useCallback(() => {
        if (!isLoading && hasMore) {
            const nextPage = currentPage + 1;
            setCurrentPage(nextPage);
            handleFiltersChange({
                pageToLoad: nextPage,
                isNewSearch: false,
            });
        }
    }, [currentPage, handleFiltersChange, hasMore, isLoading]);

    return { films, loadMore, hasMore, currentPage, isLoading };
}
