import { RequestInit } from 'next/dist/server/web/spec-extension/request';
/* import { basePath, API_BASE_URL, HTTP_STATUS } from '../services/constants'; */

interface RequestOptions extends RequestInit {
    headers?: {
        'Content-Type'?: string;
        Authorization?: string;
    };
    timeout?: number;
}

export interface RequestResult<T> {
    ok: boolean;
    data: T | null;
    status: number;
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

const request = async <T>(
    url: string,
    params: RequestOptions = {},
    defaultReturn: T | null = null
): Promise<RequestResult<T>> => {
    try {
        params.headers = {
            'Content-Type': 'application/json',
            Authorization: `${sessionStorage.getItem('sessionToken')}`,
            ...(params.headers || {}),
        };
        params.mode = 'cors';
        params.timeout;

        const res = await fetch(
            `/api/${url}`,
            params
        );

        const { data } = await res.json();

        if (res.status !== HTTP_STATUS.ok)
            return { ok: false, data, status: res.status };
        return { ok: true, data, status: HTTP_STATUS.ok };
    } catch {
        return {
            ok: false,
            data: defaultReturn,
            status: HTTP_STATUS.internalServerError,
        };
    }
};

export default request;
