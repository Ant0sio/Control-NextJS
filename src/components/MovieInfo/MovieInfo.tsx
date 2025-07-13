import './MovieInfo.css';
import './MovieInfo-0-767.css'
import type {FC} from "react";
import StarsRatingsClient from "@/components/StarsRatings/StarsRatings.client";
import {IMovieWithDetails} from "@/models/IMovieWithDetails";
import Link from "next/link";


//Цей компонент приймає обєкт з даними про фільм і відображає їх.
//Також є поле з жанрами під які підпадає цей фільм,при кліку на жанр переходимо на сторінку фільмів  цього жанру.


type MovieInfoPropsType = { movie: IMovieWithDetails }
const MovieInfo: FC<MovieInfoPropsType> = ({movie}) => {

    return (
        <div className={'characteristicDiv'}>
            <h2 className={'title'}>{movie.title}</h2>
            <div><span>Tagline:</span>{movie.tagline}</div>
            <div><span>Release Date:</span>{movie.release_date}</div>
            <div><span>Runtime:</span>{movie.runtime}</div>
            <div><span>Original title:</span>{movie.original_title}</div>
            <div><span>Genres:</span>{movie.genres.map((genre, index) => <span key={index}>|<Link
                href={`/genres/${genre.name}/${genre.id}`}>{genre.name}</Link> |</span>)}</div>
            <div><span>Original lenguage:</span>{movie.original_language}</div>
            <div><span>Origin country:</span>{movie.origin_country.map((country, index) => <span
                key={index}>{country}</span>)}</div>
            <div><span>Adult:</span>{movie.adult ? '+18' : '+6'}</div>
            <div><span>Popularity:</span>{movie.popularity}</div>
            <div className={'urlHomePage'}><span>Home page:</span><Link href={movie.homepage}>{movie.homepage}</Link>
            </div>
            <div><span>Status:</span>{movie.status}</div>
            <div><span>Vote count:</span>{movie.vote_count}</div>
            <div><span>Average:</span>{movie.vote_average}/10</div>
            <StarsRatingsClient movie_rating={movie.vote_average}/>
        </div>
    );
};

export default MovieInfo;