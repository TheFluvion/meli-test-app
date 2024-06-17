import itemDetail from "@/helpers/itemDetail";
import { Description, ResponseItemData, ResponseDescriptionData, FormatDetailData } from "@/services/types/itemDetail";
import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = 'https://api.mercadolibre.com/items/'

export async function GET(req: NextRequest, { params }: { params: { id: string } }): Promise<any> {
    const id = params.id;
    const url = `${API_BASE_URL}${id}`;
    const descriptionUrl = `${API_BASE_URL}${id}/description`;

    const responseData: ResponseDescriptionData = await Promise.all([
        fetch(url, { mode: 'cors' }),
        fetch(descriptionUrl, { mode: 'cors' })
    ]).then(async ([item, description]) => {
        const itemData: ResponseItemData = await item.json();
        const descriptionData: Description = await description.json();

        return {
            description: descriptionData,
            ResponseItemData: itemData
        }
    });

    // Format the data to be returned
    const formatedData: FormatDetailData = itemDetail.formatResponseDetailData(responseData);

    return NextResponse.json({ data: formatedData });
}
