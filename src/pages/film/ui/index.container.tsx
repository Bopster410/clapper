import { observer } from 'mobx-react-lite';
import { FilmPage } from './index.component';
import { filmData } from '../model/index.context';

export const FilmPageContainer = observer(() => {
    const props = filmData;

    return <FilmPage {...props} />;
});
