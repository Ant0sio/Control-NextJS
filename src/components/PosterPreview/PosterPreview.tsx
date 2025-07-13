import type {FC} from "react";
import './PostPreview.css';
import Image from "next/image";


//Цей компонент відображає постер фільму,зробив у ньому гнучку стилізацію через аргумент,тому що використовую його в декількох компонентах,в яких потрібний різний розмір самого постера,і шлях відповідно щоб в кожному фільмі підтягувало саме його постер.

type PosterPreviewPropsType = {
    width: number,
    path: string,
    className?: string,
}
const PosterPreview: FC<PosterPreviewPropsType> = ({className, width, path}) => {

    return (
        <div>
            <Image alt={'poster'} className={className} width={300} height={400}
                   src={`https://image.tmdb.org/t/p/w${width}${path}`}/>
        </div>
    );
};

export default PosterPreview;


