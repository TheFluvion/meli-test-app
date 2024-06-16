import request from "@/services"
import { FormatSearchData, Item } from "@/services/types/itemSearch"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

type Param = 'search' | 'query' | 'item' | null

const useSearchItems = (
    queryParam: Param,
    disabledFetch?: boolean
) => {
    const searchParams = useSearchParams()
    const param: string | null = searchParams.get(queryParam || 'search')
    const [searchData, setSearchData] = useState<FormatSearchData | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (disabledFetch) return
        handleFetchItems()
    }, [param])

    const handleFetchItems = async () => {
        if (!param) return;
        setLoading(true)
        const { ok, data } = await request<FormatSearchData>(`items?q=${param}`)

        if (ok && data) {
            setSearchData(data)
        } else {
            setSearchData(null)
        }
        setLoading(false)
    }

    return {
        items: searchData?.items,
        categories: searchData?.categories,
        loading,
        param
    }
}

export default useSearchItems
