import request from "@/services"
import { FormatSearchData, Item } from "@/services/types/itemSearch"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

type Param = 'search' | 'query' | 'item' | null

const useSearchItems = (
    queryParam: Param
) => {
    const searchParams = useSearchParams()
    const param: Param = searchParams.get(queryParam as string) as Param
    const [items, setItems] = useState<Item[]>([] as Item[])

    useEffect(() => {
        if (!param) return
        handleFetchItems()
    }, [param])

    const handleFetchItems = async () => {
        if (!param) return;
        const { ok, data } = await request<FormatSearchData>(`items?q=${param}`)

        if (ok && data) {
            setItems(data.items)
        } else {
            setItems([])
        }
    }

    return {
        items
    }
}

export default useSearchItems
