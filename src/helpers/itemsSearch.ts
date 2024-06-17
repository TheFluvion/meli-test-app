import { FormatSearchData, Item, ResponseData } from "@/services/types/itemSearch"

const itemSearchHelpers = {
    formatPrice: (price: number) => price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, "."),
    formatResponseSearchData: (responseData: ResponseData): FormatSearchData => {
        const categories: string[] = []

        responseData.filters.forEach(filter => {
            if (filter.id === 'category') {
                filter.values.forEach(value => {
                    value.path_from_root.forEach(category => {
                        categories.push(category.name)
                    })
                })
            }
        })

        const items: Item[] = responseData.results.map(item => {
            return {
                categories,
                id: item.id,
                title: item.title,
                price: {
                    currency: item.currency_id,
                    amount: item.price,
                    decimals: null
                },
                picture: item.thumbnail,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping,
            }
        })

        const FormatedData: FormatSearchData = {
            author: {
                name: null,
                lastname: null
            },
            categories,
            items
        }

        return FormatedData
    }
}

export default itemSearchHelpers;
