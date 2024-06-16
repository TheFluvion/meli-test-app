'use client';
import useDetailItem from "@/hooks/useDetailItem";
import styles from "./page.module.scss";
import Image from "next/image";
import itemSearchHelpers from "@/helpers/itemsSearch";
import itemDetail from "@/helpers/itemDetail";

const ItemDetailPage = ({ params: { id } }: { params: { id: string } }) => {
    const { item } = useDetailItem(id);

    if (!item.id) return

    return (
        <main className={styles.container}>
            <section className={styles.informationContainer}>
                <Image
                    src={item.picture}
                    alt={item.title}
                    width={680}
                    height={680}
                />
                <div className={styles.buyInformation}>
                    <p className={styles.sold}>
                        {itemDetail.getCondition(item.condition)} - {item.sold_quantity} vendidos
                    </p>
                    <h2 className={styles.title}>
                        {item.title}
                    </h2>
                    <h1 className={styles.price}>
                        $ {itemSearchHelpers.formatPrice(item.price.amount)}
                    </h1>
                    <a className={styles.button} href={item.permalink}>
                        Comprar
                    </a>
                </div>
            </section>
            <article className={styles.descriptionContainer}>
                <h2 className={styles.descriptionTitle}>
                    Descripción del producto
                </h2>
                <p className={styles.description}>
                    {item.description}
                </p>
            </article>
        </main>
    );
}

export default ItemDetailPage;
