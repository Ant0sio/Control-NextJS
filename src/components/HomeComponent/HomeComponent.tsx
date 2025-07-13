import './HomeComponent.css'
import SpecialMoviesComponent from "@/components/SpecialMoviesComponent/SpecialMoviesComponent";
import {loadSpecialMoviesFromApi} from "@/services/api.services";


//Це компонент який підтягує з апі і відображає фільми таких категорій popular,top-rated,upcoming.

const HomeComponent = async () => {

    const moviesPopular = await loadSpecialMoviesFromApi('popular')
    const moviesTopRated = await loadSpecialMoviesFromApi('top_rated')
    const moviesUpcoming = await loadSpecialMoviesFromApi('upcoming')


    return (
        <div className={'homePageDiv'}>
            <div className={'lineMovies'}>
                <h3>Popular:</h3>
                <SpecialMoviesComponent movies={moviesPopular}/>
            </div>

            <div className={'lineMovies'}>
                <h3>Top-Rated:</h3>
                <SpecialMoviesComponent movies={moviesTopRated}/>
            </div>

            <div className={'lineMovies'}>
                <h3>Upcoming:</h3>
                <SpecialMoviesComponent movies={moviesUpcoming}/>
            </div>

        </div>
    );
};

export default HomeComponent;