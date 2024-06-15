'use client';

import ItemSearch from "@/components/ItemSearch/ItemSearch";
import useSearchItems from "@/hooks/useSearchItems";
import styles from "./page.module.scss";

const Items = () => {
    const { items } = useSearchItems('search')

    return (
        <main className={styles.container}>
            <p className={styles.category}>
                Electrónica, Audio y Video {'>'} iPod {'>'} Reproductores {'>'} iPod touch
            </p>
            <section className={styles.items}>
                {
                    items.map((item) => (
                        <ItemSearch key={item.id} item={item} />
                    )
                    )
                }
            </section>
        </main>
    );
}

export default Items;
