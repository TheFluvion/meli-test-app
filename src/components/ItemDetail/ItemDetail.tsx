import itemSearchHelpers from "@/helpers/itemsSearch";
import styles from "./ItemDetail.module.scss";
import { DetailItem } from "@/services/types/itemDetail"
import Image from "next/image";
import itemDetailHelpers from "@/helpers/itemDetail";

interface Props {
    item: DetailItem | null
}

const ItemDetail = ({ item }: Props) => {

    if (!item) return

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
                    <span className={styles.quantity}>
                        {itemDetailHelpers.getCondition(item.condition)} - {item.sold_quantity} vendidos
                    </span>
                    <h3 className={styles.title}>
                        {item.title}
                    </h3>
                    <h1 className={styles.price}>
                        $ {itemSearchHelpers.formatPrice(item.price.amount)}
                        <span className={styles.decimal}>
                            {
                                item?.price?.decimals < 10
                                    ? `0${item.price.decimals}`
                                    : item.price.decimals
                            }
                        </span>
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
    )
}

export default ItemDetail;
