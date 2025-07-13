import {type FC} from "react";
import './MovieComponent.css';
import './MovieComponent-0-767.css'
import {loadMovieFromApi} from "@/services/api.services";
import PosterPreview from "@/components/PosterPreview/PosterPreview";
import MovieInfo from "@/components/MovieInfo/MovieInfo";
import {IMovieWithDetails} from "@/models/IMovieWithDetails";
import CarouselPhotoClient from "@/components/CarouselPhoto/CarouselPhotoClient";
import Image from "next/image";


//Цей компонент приймає в себе id фільму і з апі підтягує детальну інформацію про фільм,передає в інші компоненти або блоки за допомогою яких відображає її.


type MovieComponentPropsType = {
    movieId: string;
};

const MovieComponent: FC<MovieComponentPropsType> = async ({movieId}) => {

    const movie: IMovieWithDetails = await loadMovieFromApi(movieId)

    return (
        <div className={'movieComponent'}>


            <div className={'posterPreviewAndСharacteristic'}>
                <PosterPreview className={'postPreviewBig'} width={400} path={movie.poster_path}/>
                <MovieInfo movie={movie}/>
            </div>


            <div>
                <h3> Overview:</h3>
                <div className={'overviewMovie'}>{movie.overview}</div>
            </div>

            <h3>Production companies:</h3>

            <div className={'companies'}>
                {movie.production_companies.map(company =>
                    <div className={'companieCard'} key={company.id}>
                        <Image className={'img'} src={`https://image.tmdb.org/t/p/w500${company.logo_path}`}
                               width={150}
                               height={100}
                               alt="LOGO"/>
                        <h4>{company.name}</h4>
                    </div>)}
            </div>


            <div>
                <h3>Images and footage from the film:</h3>
                <CarouselPhotoClient movie={movie}/>
            </div>

        </div>
    );
};

export default MovieComponent;