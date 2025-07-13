'use client'
import {useForm} from "react-hook-form";
import './FormSearch.css'
import {joiResolver} from "@hookform/resolvers/joi";
import './FormSearch-0-767.css';
import {validatorSearch} from "@/validator/validator";


//Цей клієнтський компонент,це форма пошуку фільмів,при вводі назви фільму в інпут і натисканні на кнопку пошук підтягаємо фільми з апі за нашим
// запитом і переходимо на сторінку з результатами пошуку.
// Додав тут мінімальну валідацію.


type FormPropsType = { search: string };

const FormSearch = () => {
    const {
        register,
        formState: {errors, isValid, touchedFields},
    }
    = useForm<FormPropsType>({mode: 'onChange', resolver: joiResolver(validatorSearch)});


    return (
        <div>
            <form className={'formComponent'} action={'/searchMovie'}>
                <label>
                    <input defaultValue={''} placeholder={"Find movie...."} className={'inputSearch'}
                           type="text" {...register('search')} />
                </label>
                <button className={'buttonSearchForm'} disabled={!isValid}>Search</button>
            </form>
            <span className={'messages'}> {touchedFields.search && errors && <div>{errors.search?.message}</div>}</span>
        </div>
    );
};


export default FormSearch;