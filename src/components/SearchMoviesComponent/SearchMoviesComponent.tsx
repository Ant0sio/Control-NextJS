import React from 'react';
import './SearchMoviesComponent.css';
import './SearchMoviesComponent-0-767.css';
import './SearchMoviesComponent-768-1024.css'
import {loadSearchMoviesFromApi} from "@/services/api.services";
import MoviesListCard from "@/components/MoviesListCard/MoviesListCard";

//Цей компонент приймає в себе запит пошуку з урли і на основі нього робить запит до апі,
// витягує потрібні фільми які співпадають по назві до запиту пошуку  і рендерить ці фільми

type Props = {
    search: string
}

export const SearchMoviesComponent = async ({search}: Props) => {

    const movies = await loadSearchMoviesFromApi(search);

    return (
        <div className={'moviesList'}>
            {
                movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
            }
        </div>
    );
};

export default SearchMoviesComponent;