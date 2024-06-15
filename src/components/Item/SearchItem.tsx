import { Item } from "@/services/types"
import Image from "next/image"
import styles from "./SearchItem.module.scss"
import truck from "@/../public/icon-truck.svg";

interface Props {
    item: Item
}

const SearchItem = ({ item }: Props) => {
    return (
        <article className={styles.container}>
            <Image className={styles.image} src={item.thumbnail} alt={item.title} width={720} height={720} />
            <section className={styles.information}>
                <p className={styles.price}>
                    ${item.price}
                    {
                        item.shipping.free_shipping && (
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
        </article>
    )
}

export default SearchItem
