import { useSearchParams } from 'react-router';
import { HomePage } from './index.component';

export const HomePageContainerSearchParams = () => {
    const [searchParams] = useSearchParams();
    const yearMinParam = searchParams.get('yearmin');
    const yearMaxParam = searchParams.get('yearmax');
    const ratingMinParam = searchParams.get('ratingmin');
    const ratingMaxParam = searchParams.get('ratingmax');
    const genres = searchParams.get('genres');

    return (
        <HomePage
            filterParams={{
                year:
                    yearMinParam && yearMaxParam
                        ? {
                              min: Number.parseInt(yearMinParam),
                              max: Number.parseInt(yearMaxParam),
                          }
                        : null,
                rating:
                    ratingMinParam && ratingMaxParam
                        ? {
                              min: Number.parseFloat(ratingMinParam),
                              max: Number.parseFloat(ratingMaxParam),
                          }
                        : null,
                genres: genres ? JSON.parse(genres) : null,
            }}
        />
    );
};
