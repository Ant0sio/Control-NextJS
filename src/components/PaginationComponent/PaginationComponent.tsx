'use client';
import {Pagination, PaginationItem, PaginationLink} from "reactstrap";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

//Це компонент з пагінацією.
//В ньому  я зробив захисти щоб клієнт,якщо він на першій page  не зміг йти назад і міг дійти до певної сторінки.


const PaginationComponent = () => {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const currentPage = Number(searchParams.get('pg') || '1');

    const setQuery = (page: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('pg', page);
        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <Pagination>
            <PaginationItem>
                <PaginationLink onClick={() => setQuery('1')} first/>
            </PaginationItem>

            <PaginationItem disabled={currentPage <= 1}>
                <PaginationLink onClick={() => {
                    if (currentPage > 1) setQuery((currentPage - 1).toString());
                }} previous/>
            </PaginationItem>

            {[1, 2, 3, 4, 5].map((p) => (
                <PaginationItem active={p === currentPage} key={p}>
                    <PaginationLink onClick={() => setQuery(p.toString())}>
                        {p}
                    </PaginationLink>
                </PaginationItem>
            ))}

            <PaginationItem disabled>
                <PaginationLink>...</PaginationLink>
            </PaginationItem>

            <PaginationItem>
                <PaginationLink>{currentPage}</PaginationLink>
            </PaginationItem>

            <PaginationItem disabled={currentPage >= 300}>
                <PaginationLink onClick={() => {
                    if (currentPage < 300) setQuery((currentPage + 1).toString());
                }} next/>
            </PaginationItem>

            <PaginationItem>
                <PaginationLink onClick={() => setQuery('300')} last/>
            </PaginationItem>
        </Pagination>
    );
};

export default PaginationComponent;
