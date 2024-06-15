import request from "@/services"
import { DetailItem } from "@/services/types"
import { useEffect, useState } from "react"

const useDetailItem = (id: string) => {
    const [item, setItem] = useState<DetailItem | null>(null)

    useEffect(() => {
        if (!id) return
        handleFetchItem()
    }, [id])

    const handleFetchItem = async () => {
        if (!id) return;
        const { ok, data } = await request<DetailItem>(`items/${id}`)

        if (ok && data) {
            setItem(data)
        } else {
            setItem(null)
        }
    }

    return {
        item
    }
}

export default useDetailItem
