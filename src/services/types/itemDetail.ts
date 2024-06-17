import { Author, Price, Shipping } from "./itemSearch";

interface Picture {
    id: string;
    url: string;
    secure_url: string;
    size: string;
    max_size: string;
    quality: string;
}

export interface ResponseItemData {
    id: string;
    title: string;
    price: number;
    pictures: Picture[];
    thumbnail: string
    condition: "new" | "used";
    shipping: Shipping;
    currency_id: string;
    permalink: string;
}

export interface Description {
    text: string
    plain_text: string,
    last_updated: string,
    date_created: string,
    snapshot: {
        url: string,
        width: 0,
        height: 0,
        status: string
    }
}

export interface ResponseDescriptionData {
    description: Description;
    ResponseItemData: ResponseItemData;
}

export interface DetailItem {
    id: string;
    title: string;
    price: Price;
    picture: string;
    condition: "new" | "used";
    free_shipping: boolean;
    sold_quantity: number;
    description: string;
    permalink: string;
}

export interface FormatDetailData {
    author: Author
    items: DetailItem
}