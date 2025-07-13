'use client';

//Цей клієнтський компонент допоміг мені зробити chat gpt,вирішення на stackoverflow  не зміг знайти,
//якщо я напряму користувався <StarsRatings/> постійно була помилка з рендерінгом.Більше chat gpt не використовував ніде.

import dynamic from 'next/dynamic';
import { FC } from 'react';

const ClientSafeRating = dynamic(() => import('./StarsRatings'), {
    ssr: false,
});

type Props = {
    movie_rating: number;
};

const StarsRatingsClient: FC<Props> = ({ movie_rating }) => {
    return <ClientSafeRating movie_rating={movie_rating} />;
};

export default StarsRatingsClient;
