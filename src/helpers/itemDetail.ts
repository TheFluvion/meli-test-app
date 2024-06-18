import { FormatDetailData, ResponseDescriptionData } from "@/services/types/itemDetail";

const itemDetailHelpers = {
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
                decimals: itemDetailHelpers.getDecimals(price)
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
    },
    getDecimals: (price: number) => {
        // Convert the number to a string
        const numberString = price.toString();

        // Find the position of the decimal point
        const decimalPointIndex = numberString.indexOf('.');

        // If there is no decimal point, return 0
        if (decimalPointIndex === -1) {
            return 0;
        }

        // Extract and return the decimal part
        const decimalPart = numberString.substring(decimalPointIndex + 1);

        return parseFloat(decimalPart);
    }
}

export default itemDetailHelpers;
