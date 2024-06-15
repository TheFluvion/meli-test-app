import request from "@/services"
import { Item } from "@/services/types"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

const useItems = () => {
    const searchParams = useSearchParams()
    const search = searchParams.get('search')
    const [items, setItems] = useState<Item[]>([] as Item[])

    useEffect(() => {
        if (!search) return
        handleFetchItems()
    }, [search])

    const handleFetchItems = async () => {
        if (!search) return;
        const { ok, data } = await request<Item[]>(`items?q=${search}`)
        if (ok && data) {
            setItems(data)
        } else {
            setItems([])
        }
    }

    return {
        items
    }
}

export default useItems
