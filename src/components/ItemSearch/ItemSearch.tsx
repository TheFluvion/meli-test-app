import { Item } from "@/services/types/itemSearch"
import Image from "next/image"
import styles from "./ItemSearch.module.scss"
import truck from "@/../public/icon-truck.svg";
import { itemHelpers } from "@/helpers/itemsSearch";
import Link from "next/link";

interface Props {
    item: Item
}

const ItemSearch = ({ item }: Props) => {
    return (
        <Link href={`/items/${item.id}`} className={styles.container}>
            <Image className={styles.image} src={item.picture} alt={item.title} width={720} height={720} />
            <section className={styles.information}>
                <p className={styles.price}>
                    ${itemHelpers.formatPrice(item.price.amount)}
                    {
                        item.free_shipping && (
                            <Image
                                src={truck}
                                className={styles.icon}
                                alt='search'
                                width={20}
                                height={20}
                            />
                        )
                    }
                </p>
                <h2 className={styles.title}>
                    {item.title}
                </h2>
            </section>
        </Link>
    )
}

export default ItemSearch
