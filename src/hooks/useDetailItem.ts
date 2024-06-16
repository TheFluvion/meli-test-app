import request from "@/services"
import { DetailItem, FormatDetailData } from "@/services/types/itemDetail"
import { useEffect, useState } from "react"

const useDetailItem = (id: string) => {
    const [item, setItem] = useState<DetailItem>({} as DetailItem)

    useEffect(() => {
        if (!id) return
        handleFetchItem()
    }, [id])

    const handleFetchItem = async () => {
        if (!id) return;
        const { ok, data } = await request<FormatDetailData>(`items/${id}`)

        if (ok && data) {
            setItem(data.items)
        } else {
            alert('Error al obtener el detalle del producto')
        }
    }

    return {
        item
    }
}

export default useDetailItem
