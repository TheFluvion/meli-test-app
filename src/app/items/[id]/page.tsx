'use client';
import useDetailItem from "@/hooks/useDetailItem";
import ItemDetail from "@/components/ItemDetail";
import styles from './page.module.scss'
import ItemDetailSkeleton from "@/components/ItemDetailSkeleton";

const ItemDetailPage = ({ params: { id } }: { params: { id: string } }) => {
    const { item, loading } = useDetailItem(id);

    if (!item && !loading) return

    return (
        <div className={styles.container}>
            {
                loading
                    ? <ItemDetailSkeleton />
                    : <ItemDetail item={item} />
            }
        </div>
    );
}

export default ItemDetailPage;
