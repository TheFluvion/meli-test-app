import request from "@/services"
import { DetailItem, FormatDetailData } from "@/services/types/itemDetail"
import { useEffect, useState } from "react"

//Hook to get the detail of an item
const useDetailItem = (id: string) => {
    const [item, setItem] = useState<DetailItem | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!id) return
        handleFetchItem()
    }, [id])

    const handleFetchItem = async () => {
        if (!id) return;
        setLoading(true)
        const { ok, data } = await request<FormatDetailData>(`items/${id}`)

        if (ok && data) {
            setItem(data.items)
        } else {
            alert('Error al obtener el detalle del producto')
        }
        setLoading(false)
    }

    return {
        item,
        loading
    }
}

export default useDetailItem
