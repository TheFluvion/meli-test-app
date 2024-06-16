'use client';
import useDetailItem from "@/hooks/useDetailItem";
import ItemDetail from "@/components/ItemDetail/ItemDetail";

const ItemDetailPage = ({ params: { id } }: { params: { id: string } }) => {
    const { item } = useDetailItem(id);

    if (!item.id) return

    return (
        <ItemDetail item={item} />
    );
}

export default ItemDetailPage;
