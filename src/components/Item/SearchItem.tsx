import { Item } from "@/services/types"
import Image from "next/image"

interface Props {
    item: Item
}

const SearchItem = ({ item }: Props) => {

    return (
        <main>
            <h1>{item.title}</h1>
            <Image src={item.thumbnail} alt={item.title} width={100} height={100} />
            <p>{item.price.amount}</p>
        </main>
    )
}

export default SearchItem
