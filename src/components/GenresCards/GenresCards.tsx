import {type FC} from "react";
import './GenresCards.css'
import Link from "next/link";
import {IGenre} from "@/models/IGenre";


//Цей компонент приймає масив жанрів і рендерить їх,застилізований під список карточок з назвами жанрів,при кліку на картку
//переходимо на сторінку відповідного жанру

type GenreCardsPropsType = {
    genres: IGenre[]
};
const GenresCards: FC<GenreCardsPropsType> = ({genres}) => {

    return (
        <div className={'genresCardsList'}>
            {
                genres.map(genre =>
                    <Link key={genre.id} href={`/genres/${genre.name}/${genre.id}`} className={'cleanLink'}>
                        <div className={'genreCard'} key={genre.id}>
                            {genre.name}
                        </div>
                    </Link>)
            }
        </div>
    );
};

export default GenresCards;