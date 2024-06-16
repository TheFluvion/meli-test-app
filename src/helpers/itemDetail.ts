import { FormatDetailData, ResponseDescriptionData } from "@/services/types/itemDetail";

const itemDetail = {
    formatResponseDetailData: (responseData: ResponseDescriptionData): FormatDetailData => {
        const { ResponseItemData, description } = responseData;
        const { id, title, price, pictures, condition, shipping, currency_id, permalink } = ResponseItemData;
        const { plain_text } = description;

        const author = {
            name: null,
            lastname: null
        }

        const items = {
            id,
            title,
            price: {
                currency: currency_id,
                amount: price,
                decimals: null
            },
            picture: pictures[0].url,
            condition,
            free_shipping: shipping.free_shipping,
            sold_quantity: Math.floor(Math.random() * 500) + 1,
            description: plain_text,
            permalink
        }

        return {
            author,
            items
        }
    },
    getCondition: (condition: string) => {
        return condition === 'new' ? 'Nuevo' : 'Usado';
    }
}

export default itemDetail;
