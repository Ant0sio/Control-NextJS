import type {FC} from "react";
import './SpecialMoviesComponent.css';
import './SpecialMoviesComponent-0-767.css';
import './SpecialMoviesComponent-768-1024.css'
import {IMovie} from "@/models/IMovie";
import {shortArray} from "@/helpers/shortArray";
import MoviesListCard from "@/components/MoviesListCard/MoviesListCard";


//Це компонент приймає в себе масив з фільмами, і відображає тільки частину з них.
//Це я продумав таку логіку щоб  HomeComponent  відображати фільми з такими категоріями popular,top rated,upcoming.

type SpecialMoviesComponentProps = {
    movies: IMovie[]
};

const SpecialMoviesComponent: FC<SpecialMoviesComponentProps> = ({movies}) => {

    const moviesArray = shortArray<IMovie>(movies)

    return (
        <div className={'popularMovieDiv'}>
            {
                moviesArray.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
            }
        </div>
    );
};

export default SpecialMoviesComponent;