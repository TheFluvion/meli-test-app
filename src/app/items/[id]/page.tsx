'use client';
import useDetailItem from "@/hooks/useDetailItem";
import ItemDetail from "@/components/ItemDetail/ItemDetail";
import styles from './page.module.scss'
import ItemDetailLoader from "@/components/ItemDetailLoader/ItemDetailLoader";

const ItemDetailPage = ({ params: { id } }: { params: { id: string } }) => {
    const { item, loading } = useDetailItem(id);

    if (!item) return

    return (
        <main className={styles.container}>
            {
                loading
                    ? <ItemDetailLoader />
                    : <ItemDetail item={item} />
            }
        </main>
    );
}

export default ItemDetailPage;
