import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Suspense} from "react";
import Preloader from "@/components/Preloader/Preloader";

//Це Root Layout в якому ми відображаємо компонент Header який присутній на всіх pages,а також обгорнули
// children в Suspense для того,щоб поки дані підвантажуються показувало Preloader

export const metadata: Metadata = {
    title: "Cinema",
    icons: {
        icon: '/images/favicon-movie.png',
    }
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body>

        <header>
            <Header/>
        </header>

        <div className={'children'}>
            <Suspense fallback={<Preloader/>}>
                {children}
            </Suspense>
        </div>

        </body>
        </html>
    );
}
