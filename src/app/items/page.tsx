'use client';

import ItemSearch from "@/components/ItemSearch/ItemSearch";
import useSearchItems from "@/hooks/useSearchItems";
import styles from "./page.module.scss";

const Items = () => {
    const { items } = useSearchItems('search')

    if (!items.length) return

    return (
        <main className={styles.container}>
            <span className={styles.category}>
                Electrónica, Audio y Video {'>'} iPod {'>'} Reproductores {'>'} iPod touch
            </span>
            <section className={styles.items}>
                {
                    items.map((item) => (
                        <ItemSearch key={item.id} item={item} />
                    ))
                }
            </section>
        </main>
    );
}

export default Items;
