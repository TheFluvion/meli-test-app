import request from "@/services"
import SearchServices from "@/services/SearchServices"
import { FormatSearchData, Item } from "@/services/types/itemSearch"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export type Param = 'search' | 'query' | 'item'

//Hook to get the items from the search
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
        const { ok, data } = await SearchServices.getItems(param)

        if (ok && data?.items.length) {
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
