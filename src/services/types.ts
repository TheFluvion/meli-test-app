export interface Author {
    name: string;
    lastname: string;
}

interface Shipping {
    free_shipping: boolean
}

export interface Filters {
    id: string;
    name: string;
    text: string;
    values: {
        id: string;
        name: string;
        path_from_root: {
            id: string;
            name: string;
        }[]
    }[]
}

export interface ItemRequest {
    id: string;
    title: string;
    price: number;
    picture: string;
    thumbnail: string
    condition: string;
    free_shipping: boolean;
    shipping: Shipping;
    currency_id: string;
    seller: {
        id: number
        nickname: string
    }
}

export interface Item {
    id: string;
    title: string;
    price: {
        currency: string;
        amount: number;
        decimals: number | null;
    };
    picture: string;
    condition: string;
    free_shipping: boolean;
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

export interface DetailItem {
    id: string;
    title: string;
    price: number;
    picture: string;
    condition: string;
    free_shipping: boolean;
    sold_quantity: number;
    description: string;
    thumbnail: string
}

export interface ResponseData {
    author: Author;
    results: ItemRequest[];
    filters: Filters[]
}

export interface FormatData {
    author: {
        name: string | null;
        lastname: string | null;
    }
    categories: string[];
    items: Item[]
}
