'use client';

import SearchItem from "@/components/Item/SearchItem";
import useItems from "@/hooks/useItems";

const Items = () => {
    const { items } = useItems();

    return (
        <main>
            {
                items.map((item, index) => {
                    if (index > 3) return
                    return (
                        <SearchItem key={item.id} item={item} />
                    )
                })
            }
        </main>
    );
}

export default Items;
