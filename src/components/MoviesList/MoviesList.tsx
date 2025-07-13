import React, {FC} from 'react';
import {loadMoviesFromApi} from "@/services/api.services";
import MoviesListCard from "@/components/MoviesListCard/MoviesListCard";
import './MoviesList-0-767.css'
import './MoviesList.css'
import './MoviesList-768-1024.css'

//Цей компонент приймає в себе ідентифікатор жанру і page за допомогою яких витягує з апі масив з фільмами і відображає йогo.

type Props = {
    genreId: string,
    page: string,
}


const MoviesList: FC<Props> = async ({genreId, page}) => {

    const movies = await loadMoviesFromApi(genreId || '1', page)

    return (
        <div className={'moviesList'}>
            {
                movies.map(movie => (<MoviesListCard key={movie.id} movie={movie}/>))
            }
        </div>
    );
};

export default MoviesList;