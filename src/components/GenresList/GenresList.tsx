import 'bootstrap/dist/css/bootstrap.min.css';
import {loadGenresFromApi} from "@/services/api.services";
import DropdownGanresList from "@/components/DropdownGanresList/DropdownGanresList";


//Цей компонент підтягує з апі жанри фільмів і передає їх в компонент(" кнопка при кліку на яку відкривається список жанрів") який їх відображає.

const GenresList = async () => {

    const genres = await loadGenresFromApi()

    return (
        <div>
            <DropdownGanresList genres={genres}/>
        </div>
    );
};

export default GenresList;