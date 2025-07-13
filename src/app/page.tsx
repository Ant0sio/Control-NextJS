import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from "@/components/HomeComponent/HomeComponent";
//В цій page ми відображаємо компонент в якому знаходяться  фільми таких категорій
//popular,top-rated,upcoming.

export default async function Home() {

    return (
        <div>
            <main>
                <HomeComponent/>
            </main>
        </div>
    );
}
