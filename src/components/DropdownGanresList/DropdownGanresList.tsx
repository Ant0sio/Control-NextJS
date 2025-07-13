'use client'
import {
    DropdownToggle,
    DropdownMenu,
    DropdownItem, UncontrolledDropdown, Button,
} from 'reactstrap';
import type {FC} from "react";
import './DropdownGenresList-0-767.css'
import './DropdownGenresList.css';
import Link from "next/link";
import {IGenre} from "@/models/IGenre";
import './DropdownGenresList-0-767.css'

// Цей клієнтський компонент,це розділена на дві частини кнопка при натисканні лівої сторони переходимо на сторінку з жанрами,
//при натисканні правої сторони,тобто стрілочки вниз,відкривається список жанрів,при натисканні на жанр переходимо на сторінку з фільмами відповідного жанру .


type DropdownGanresListPropsType = {
    genres: IGenre[];
};

export const DropdownGanresList: FC<DropdownGanresListPropsType> = ({genres}) => {

    return (
        <>
            <UncontrolledDropdown group className={'chik'}>

                <Link href={'/genres'}><Button className={'buttonGenresBig'} color="primary">Genres</Button></Link>

                <DropdownToggle className={'buttonGenres'} caret color="primary"/>

                <DropdownMenu className={'buttonGenres'}>
                    {genres.map(genre =>
                        <Link href={`/genres/${genre.name}/${genre.id}`} key={genre.id}>
                            <DropdownItem className={'dropdownItem'} key={genre.id}>
                                {genre.name}
                            </DropdownItem>
                        </Link>
                    )}
                </DropdownMenu>

            </UncontrolledDropdown>
        </>
    );
}
export default DropdownGanresList;