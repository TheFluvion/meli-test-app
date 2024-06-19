import { RequestInit } from 'next/dist/server/web/spec-extension/request';
import { HTTP_STATUS } from './constants';

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
