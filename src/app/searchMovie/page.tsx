import React from 'react';
import './page.css'
import SearchMoviesComponent from "@/components/SearchMoviesComponent/SearchMoviesComponent";

//Це page  в якій ми витягуємо з урли запит пошуку і віддаємо його в наступний компонент для подальшої
// обробки,а також формуємо динамічний title в metaData


type Props = {
    searchParams: Promise<{ search: string }>;
};


export const generateMetadata = async ({searchParams}: Props) => {
    const {search} = await searchParams;
    return {
        title: `Search:${search}`}
};


const SearchPage = async ({searchParams}: Props) => {

    const {search} = await searchParams

    return (
        <div className={'searchPage'}>
            <h3>Movies found by request:({search})</h3>
            <SearchMoviesComponent search={search}/>
        </div>
    );
};

export default SearchPage;