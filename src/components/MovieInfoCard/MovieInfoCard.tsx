import {type FC} from "react";

import './MovieInfoCard.css'
import {shortText} from "@/helpers/shortText";
import GenreBadge from "@/components/GenreBadge/GenreBadge";


//Цей компонент відображає коротку інформацію про фільм,цей елемент знаходиться в MoviesListCard.


type MovieInfoCardPropsType = {
    title: string,
    overview: string,
    genre_ids: number[],
}

const MovieInfoCard: FC<MovieInfoCardPropsType> = ({title, overview, genre_ids}) => {

    const text = shortText(overview)

    return (
        <div className={'movieInfo'}>
            <h3 className={'card-title titleMy'}>{title}</h3>
            <GenreBadge classNameGenre={"genreLineCard"} movieGenre_ids={genre_ids}/>
            <div className={'overview'}>{text}...details</div>

        </div>
    );
};

export default MovieInfoCard;