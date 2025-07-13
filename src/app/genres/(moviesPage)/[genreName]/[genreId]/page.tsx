import './page.css'
import MoviesList from "@/components/MoviesList/MoviesList";
import PaginationComponent from "@/components/PaginationComponent/PaginationComponent";
import {Metadata} from "next";

//В цій page ми рендеримо жанр  фільмів які переглядаємо,компонент з фільмами
//в який передаємо дані з урли (params:{genreId, genreName} i searchParams:{pg})
//для подальшої обробки,компонент пагінацією.


type Props = {
    params: Promise<{ genreId: string, genreName: string }>;
    searchParams: Promise<{ pg: string }>
};


export const metadata: Metadata = {
    title: "Movies"
};


const MoviesPage = async ({params, searchParams}: Props) => {

    const {genreId, genreName} = await params;
    const {pg} = await searchParams;

    return (
        <div className={'moviesPage'}>
            <h4>Genre:{genreName}</h4>
            <MoviesList genreId={genreId} page={pg || '1'}/>
            <PaginationComponent/>
        </div>
    );
};

export default MoviesPage;