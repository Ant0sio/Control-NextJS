'use client'
import {type FC, useEffect, useState} from "react";
import './CarouselPhoto.css'
import './CarouselPhoto-0-767.css'
import {IMovieWithDetails} from "@/models/IMovieWithDetails";
import {useAppSelector} from "@/redux/hooks/useAppSelector";
import {useAppDispatch} from "@/redux/hooks/useAppDispatch";
import Image from "next/image";
import {imagesSliceActions} from "@/redux/slices/imagesSlice";

// Клієнтський компонент який приймає фільм і за допомогою його id  витягує з апі фото до цього фільму,//деякі фільми немають фото але мають постер,
// тож тут я продумав логіку у випадку якщо масив з фото пустий то ми в даний компонент
//вкладаємо постер фільму.

type CarouselPhotoPropsType = {
    movie: IMovieWithDetails
};

const CarouselPhoto: FC<CarouselPhotoPropsType> = ({movie}) => {

    const [number, setNumber] = useState<number>(0);

    const {imagesResponse: {backdrops}} = useAppSelector(({imagesSlice}) => imagesSlice)
    const dispatch = useAppDispatch()

    const image = () => {
        if (backdrops.length === 0) {
            return movie.poster_path
        } else {
            return backdrops
        }
    };


    const path = image()

    const imgPath = () => {
        if (typeof path === "string") {
            return path
        } else {
            return path[number].file_path
        }
    };


    const handlePrevClick = () => {
        if (number > 0) setNumber(prev => Math.max(0, prev - 1))
    };
    const handleNextClick = () => {
        if (number < path.length - 1) setNumber(prev => Math.min(path.length - 1,
            prev + 1))
    };


    useEffect(() => {
        dispatch(imagesSliceActions.loadImages(movie.id))
    }, [number, movie.id, dispatch]);

    return (

        <div className={'carouselPhotoDiv'}>
            <div id="carouselExample" className="carousel slide carouselPhotoComponent">
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        {imgPath()?.trim() &&
                            <Image src={`https://image.tmdb.org/t/p/w500/${imgPath()}`} width={500} height={330}
                                   className="d-block w-100" alt="..."/>}
                    </div>
                </div>
                <button onClick={handlePrevClick} className="carousel-control-prev" type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button onClick={handleNextClick} className="carousel-control-next" type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


        </div>

    );
};

export default CarouselPhoto;