import {type FC} from "react";
import './GenreBadge.css'
import {loadGenresFromApi} from "@/services/api.services";

type GenreBadgePropsType = {
    movieGenre_ids: number[],
    classNameGenre: string
}

//Цей компонент відображає значки жанрів,з апі підвантажується список з фільмами і в кожному фільмі є поле це масив з ідентифікаторами жанрів genres_id ,але без назв самих жанрів,в цьому компоненті я продумав таку логіку,що якщо іd з genres_id співпадає з id жанру("тих жанрів фільмів які ми підвантажуємо з апі {genres}"),тоді їх компонент рендерить і відповідно є стрічка з назвами жанрів.

const GenreBadge: FC<GenreBadgePropsType> = async ({movieGenre_ids, classNameGenre}) => {

    const genres = await loadGenresFromApi()

    const genreNames = () => {
        const genreNames: string[] = []
        for (const genre_id of movieGenre_ids) {
            for (const genre of genres) {
                if (genre_id === genre.id) {
                    genreNames.push(genre.name)
                }
            }
        }
        return genreNames
    }


    return (
        <div className={classNameGenre}>
            {
                genreNames().map((genre, index) => <span key={index}>|{genre}| </span>)
            }
        </div>
    );
};

export default GenreBadge;