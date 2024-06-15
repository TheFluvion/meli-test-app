'use client';
import useDetailItem from "@/hooks/useDetailItem";

const ItemDetailPage = ({ params: { id } }: { params: { id: string } }) => {
    const { item } = useDetailItem(id);
    console.log(item)
    return (
        <main>
            <h1>{item?.description}</h1>
        </main>
    );
}

export default ItemDetailPage;
