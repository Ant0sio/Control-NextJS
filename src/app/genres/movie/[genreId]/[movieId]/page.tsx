import React from 'react';
import './page.css';
import './page-0-767.css'
import MovieComponent from "@/components/MovieComponent/MovieComponent";

//В цій page ми вичавлюємо дані з урли а саме ідендифікатор фільму і передаємо його в компонент
//який займається відображенням,а також формуємо динамічний title.


type Props = {
    params: Promise<{ movieId: string }>
};


export const generateMetadata = async ({params}: Props) => {
    const {movieId} = await params
    return {title: `Movie id:${movieId}`}
}


const MoviePage = async ({params}: Props) => {

    const {movieId} = await params

    return (
        <div className={'moviePage'}>
            <MovieComponent movieId={movieId}/>
        </div>
    );
};

export default MoviePage;