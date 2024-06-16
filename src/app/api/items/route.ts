import itemSearchHelpers from "@/helpers/itemsSearch";
import { FormatSearchData, ResponseData } from "@/services/types/itemSearch";
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

    const formatedData: FormatSearchData = itemSearchHelpers.formatResponseSearchData(data);

    return NextResponse.json({ data: formatedData });
}
