import itemDetail from "@/helpers/itemDetail";
import { API_BASE_URL_DETAIL } from "@/services/constants";
import { Description, ResponseItemData, ResponseDescriptionData, FormatDetailData } from "@/services/types/itemDetail";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }): Promise<any> {
    const id = params.id;
    const url = `${API_BASE_URL_DETAIL}${id}`;
    const descriptionUrl = `${url}/description`;

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
