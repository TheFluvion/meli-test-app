import itemSearchHelpers from "@/helpers/itemsSearch";
import styles from "./ItemDetail.module.scss";
import { DetailItem } from "@/services/types/itemDetail"
import Image from "next/image";
import itemDetailHelpers from "@/helpers/itemDetail";

interface Props {
    item: DetailItem | null
}

const ItemDetail = ({ item }: Props) => {

    if (!item) return null

    return (
        <main className={styles.container}>
            <section className={styles.informationContainer}>
                <Image
                    src={item.picture}
                    alt={item.title}
                    width={680}
                    height={680}
                    className={styles.image}
                />
                <div className={styles.buyInformation}>
                    <span>
                        {itemDetailHelpers.getCondition(item.condition)} - {item.sold_quantity} vendidos
                    </span>
                    <h3 className={styles.text}>
                        {item.title}
                    </h3>
                    <h1 className={styles.text}>
                        $ {itemSearchHelpers.formatPrice(item.price.amount)}
                    </h1>
                    <a className={styles.button} href={item.permalink}>
                        Comprar
                    </a>
                </div>
            </section>
            <article className={styles.descriptionContainer}>
                <h2 >
                    Descripción del producto
                </h2>
                <p>
                    {item.description}
                </p>
            </article>
        </main>
    )
}

export default ItemDetail;
