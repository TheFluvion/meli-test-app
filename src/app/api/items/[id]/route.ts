import { Description, Detail } from "@/services/types";
import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = 'https://api.mercadolibre.com/items/'

export async function GET(req: NextRequest, { params }: { params: { id: string } }): Promise<any> {
    const id = params.id;

    const url = `${API_BASE_URL}${id}`;
    const descriptionUrl = `${API_BASE_URL}${id}/description`;

    return Promise.all([
        fetch(url, { mode: 'cors' }),
        fetch(descriptionUrl, { mode: 'cors' })
    ]).then(async ([item, description]) => {
        const itemData: Detail = await item.json();
        const descriptionData: Description = await description.json();

        return NextResponse.json({
            data:
            {
                ...itemData,
                description: descriptionData.plain_text
            }
        });
    });
}
