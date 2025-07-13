'use client'

import React, {FC} from 'react';
import {IMovieWithDetails} from "@/models/IMovieWithDetails";
import {Provider} from "react-redux";
import {store} from "@/redux/store/store";
import CarouselPhoto from "@/components/CarouselPhoto/CarouselPhoto";

//Це клієнтський компонент в якому я обгорнув CarouselComponent в Provider  для того щоб передавати в нього
//інформацію за допомогою redux

type CarouselPhotoPropsType = {
    movie: IMovieWithDetails
};

const CarouselPhotoClient: FC<CarouselPhotoPropsType> = ({movie}) => {
    return (
        <div>
            <Provider store={store}>
                <CarouselPhoto movie={movie}/>
            </Provider>
        </div>
    );
};

export default CarouselPhotoClient;