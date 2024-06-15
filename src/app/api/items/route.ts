import { ResponseData } from "@/services/types";
import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = 'https://api.mercadolibre.com/sites/MLA/search?q=';

export async function GET(req: NextRequest): Promise<any> {
    const query = req.nextUrl.searchParams;
    const q = query.get('q');

    const url = `${API_BASE_URL}${q}`;

    const response = await fetch(url, {
        mode: 'cors',
    });

    if (response.status !== 200)
        return { data: req.url };

    const { results }: { results: ResponseData } = await response.json();

    return NextResponse.json({ data: results });
}

