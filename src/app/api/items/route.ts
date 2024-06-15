import { FormatData, Item, ResponseData } from "@/services/types";
import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = 'https://api.mercadolibre.com/sites/MLA/search?q=';

export async function GET(req: NextRequest): Promise<any> {
    const query = req.nextUrl.searchParams;
    const q = query.get('q');

    const url = `${API_BASE_URL}${q}&limit=4&offset=0`;

    const response = await fetch(url, {
        mode: 'cors',
    });

    if (response.status !== 200)
        return { data: req.url };

    const data: ResponseData = await response.json();

    const formatedData: FormatData = formatResponseData(data);

    return NextResponse.json({ data: formatedData });
}

const formatResponseData = (responseData: ResponseData): FormatData => {
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

    const FormatedData = {
        author: {
            name: null,
            lastname: null
        },
        categories,
        items
    }

    return FormatedData
}
