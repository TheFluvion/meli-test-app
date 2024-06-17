'use client';

import ItemSearch from "@/components/ItemSearch";
import useSearchItems from "@/hooks/useSearchItems";
import styles from "./page.module.scss";
import ItemSearchSkeleton from "@/components/ItemSearchSkeleton";
import NoResultsPoster from "@/components/NoResultsPoster";

const Items = () => {
    const { items, loading, categories } = useSearchItems('search')

    const createMockArray = (length: number) => Array.from({ length }, (_, i) => i);

    return (
        <div className={styles.container}>
            {
                !items && !loading && <NoResultsPoster />
            }
            <section className={styles.category}>
                {
                    categories?.map((category, index) => (
                        <span key={index}>
                            {category}
                            {index < categories.length - 1 && ' > '}
                        </span>
                    ))
                }
            </section>
            <section className={styles.items}>
                {
                    loading
                        ? createMockArray(4).map((index) => <ItemSearchSkeleton key={index} />)
                        : items?.map((item) => (
                            <ItemSearch key={item.id} item={item} />
                        ))
                }
            </section>
        </div>
    );
}

export default Items;
