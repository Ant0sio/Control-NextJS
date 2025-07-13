import React from 'react';
import './page.css'
import {loadGenresFromApi} from "@/services/api.services";
import GenresCards from "@/components/GenresCards/GenresCards";
import {Metadata} from "next";


//В цій page  ми  витягуємо з апі масив з жанрами фільмів і передаємо масив в інший компонент для
// подальшої обробки.

export const metadata: Metadata = {
    title: " Genres"
};


const GenresPage = async () => {

    const genres = await loadGenresFromApi()

    return (
        <div className={'genresPage'}>
            <GenresCards genres={genres}/>
        </div>
    );
};

export default GenresPage;