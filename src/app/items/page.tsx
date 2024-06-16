'use client';

import ItemSearch from "@/components/ItemSearch/ItemSearch";
import useSearchItems from "@/hooks/useSearchItems";
import styles from "./page.module.scss";
import ItemSearchLoader from "@/components/ItemSearchLoader/ItemSearchLoader";

const Items = () => {
    const { items, loading, categories } = useSearchItems('search')

    if (!items) return

    const createMockArray = (length: number) => Array.from({ length }, (_, i) => i);

    return (
        <main className={styles.container}>
            <span className={styles.category}>
                {
                    categories?.map((category, index) => (
                        <span key={index}>
                            {category}
                            {index < categories.length - 1 && ' > '}
                        </span>
                    ))
                }
            </span>
            <section className={styles.items}>
                {
                    loading
                        ? createMockArray(4).map((index) => <ItemSearchLoader key={index} />)
                        : items.map((item) => (
                            <ItemSearch key={item.id} item={item} />
                        ))
                }
            </section>
        </main>
    );
}

export default Items;
