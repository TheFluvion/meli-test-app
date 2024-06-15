'use client';

import SearchItem from "@/components/Item/SearchItem";
import useSearchItems from "@/hooks/useSearchItems";
import styles from "./page.module.scss";

const Items = () => {
    const { items } = useSearchItems();

    return (
        <main className={styles.container}>
            <p className={styles.category}>
                Electrónica, Audio y Video {'>'} iPod {'>'} Reproductores {'>'} iPod touch
            </p>
            <section className={styles.items}>
                {
                    items.map((item, index) => {
                        if (index > 3) return
                        return (
                            <SearchItem key={item.id} item={item} />
                        )
                    })
                }
            </section>
        </main>
    );
}

export default Items;
