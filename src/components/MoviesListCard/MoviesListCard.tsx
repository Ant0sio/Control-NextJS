import {type FC} from "react";
import './MoviesListCard.css'
import {IMovie} from "@/models/IMovie";
import Link from "next/link";
import PosterPreview from "@/components/PosterPreview/PosterPreview";
import MovieInfoCard from "@/components/MovieInfoCard/MovieInfoCard";
import StarsRatingsClient from "@/components/StarsRatings/StarsRatings.client";

//Цей компонент це карточка фільму, він приймає в себе об'єкт з інформацією про фільм і передає в інші компоненти які і формують дану карточку.
// При кліку на карточку ми переходимо на сторінку фільму з детальною інформацією про фільм.


type MoviesListCardPropsTypes = {
    movie: IMovie
}

export const MoviesListCard: FC<MoviesListCardPropsTypes> = ({movie}) => {

    return (

        <div className={'movieCard'}>

            <Link href={{pathname: `/genres/movie/${movie.genre_ids[0]}/${movie.id}`}} className={'cleanLink'}>
                <div>
                    <PosterPreview className={'postPreviewSmall'} width={400} path={movie.poster_path}/>
                    <MovieInfoCard title={movie.title} overview={movie.overview} genre_ids={movie.genre_ids}/>
                </div>
            </Link>

            <div className={'starsAndNetworks'}>
                <StarsRatingsClient movie_rating={movie.vote_average}/>
                <Link href={'https://www.facebook.com/?locale=uk_UA'}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                         className="bi bi-facebook" viewBox="0 0 16 16">
                        <path
                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                    </svg>
                </Link>
            </div>
        </div>

    );
};

export default MoviesListCard;