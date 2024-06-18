export interface Author {
    name: string | null;
    lastname: string | null;
}

export interface Shipping {
    free_shipping: boolean
}

export interface Price {
    currency: string;
    amount: number;
    decimals: number;
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
}

export interface Item {
    id: string;
    title: string;
    price: Price
    picture: string;
    condition: string;
    free_shipping: boolean;
}

export interface ResponseData {
    author: Author;
    results: ItemRequest[];
    filters: Filters[]
}

export interface FormatSearchData {
    author: Author
    categories: string[];
    items: Item[]
}
