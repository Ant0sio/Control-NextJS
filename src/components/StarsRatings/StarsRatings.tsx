'use client';
import StarRatings from 'react-star-ratings';
import {FC} from 'react';


//Цей  клієнтський компонент приймає в себе середній бал фільму і відображає його в зірочках.

type StarsRatingsPropsType = {
    movie_rating: number;
};

const StarsRatings: FC<StarsRatingsPropsType> = ({movie_rating}) => {
    return (
        <div>
            <StarRatings
                rating={movie_rating}
                starRatedColor="gold"
                numberOfStars={10}
                name="movie-rating"
                starDimension="15px"
                starSpacing="0px"
            />
        </div>
    );
};

export default StarsRatings;
