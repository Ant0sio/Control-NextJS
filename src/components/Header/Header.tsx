import './Header.css';
import './Header-0-767.css';
import './Header-768-1024.css'
import GenresList from "@/components/GenresList/GenresList";
import Link from "next/link";
import UserInfo from "@/components/UserInfo/UserInfo";
import FormSearch from "@/components/FormSearch/FormSearch";
import Image from "next/image";


//Цей компонент акумулює в собі компоненти хедеру сайту, тобто лого вебсайту при кліку на яке ми переходимо на homepage,
//кнопку зі списком жанрів, форму для пошуку фільмів,інформацію про юзера.


const Header = () => {


    return (
        <div>


            <div className={'headerMy'}>

                <Link href={'/'} className={'cleanLink'}>
                    <div className={'containerLogoAndName'}>
                        <Image className={'logo'}
                               src="/images/movie.png"
                               alt="Cinema"
                               width={80}
                               height={80}
                        />
                        <h1 className={'name'}>Cinema</h1>
                    </div>
                </Link>

                <GenresList/>

                <FormSearch/>

                <UserInfo/>
            </div>
        </div>
    );
};

export default Header;