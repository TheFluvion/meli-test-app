export interface Author {
    name: string;
    lastname: string;
}

export interface Price {
    currency: string;
    amount: number;
    decimals: number;
}

export interface Item {
    id: string;
    title: string;
    price: Price;
    picture: string;
    thumbnail: string
    condition: string;
    free_shipping: boolean;
}

export interface ResponseData {
    author: Author;
    categories: string[];
    items: Item[];
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

export interface Detail {
    id: string;
    title: string;
    price: Price;
    picture: string;
    condition: string;
    free_shipping: boolean;
    sold_quantity: number;
    description: string;
}