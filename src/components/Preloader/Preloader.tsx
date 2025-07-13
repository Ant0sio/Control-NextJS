import React from 'react';
import {Spinner} from "reactstrap";

//Цей компонент це прелоадер,який відображається допоки підтягується інформація з апі,на сторінках рендерится він.


const Preloader = async () => {

    return (
        <div>
            <>
                <Spinner
                    color="warning"
                    type="grow"
                >
                    Loading...
                </Spinner>
                <Spinner
                    color="secondary"
                    type="grow"
                >
                    Loading...
                </Spinner>
                <Spinner
                    color="warning"
                    type="grow"
                >
                    Loading...
                </Spinner>
                <Spinner
                    color="secondary"
                    type="grow"
                >
                    Loading...
                </Spinner>
                <Spinner
                    color="warning"
                    type="grow"
                >
                    Loading...
                </Spinner>
                <Spinner
                    color="secondary"
                    type="grow"
                >
                    Loading...
                </Spinner>
                <Spinner
                    color="warning"
                    type="grow"
                >
                    Loading...
                </Spinner>
                <Spinner
                    color="secondary"
                    type="grow"
                >
                    Loading...
                </Spinner>
            </>
        </div>
    );
};

export default Preloader;