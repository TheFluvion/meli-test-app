import { Param } from "@/hooks/useSearchItems";

export const API_BASE_URL_SEARCH = 'https://api.mercadolibre.com/sites/MLA/search?q=';

export const API_BASE_URL_DETAIL = 'https://api.mercadolibre.com/items/'

export const Params: Record<Param, Param> = {
    search: 'search',
    query: 'query',
    item: 'item',
}

export const HTTP_STATUS = {
    ok: 200,
    created: 201,
    found: 302,
    badRequest: 400,
    notFound: 404,
    methodNotAllowed: 405,
    timeout: 408,
    conflict: 409,
    internalServerError: 500,
};
